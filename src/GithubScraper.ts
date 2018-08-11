import { EventEmitter } from "events";
import { queryValidator } from "github-query-validator";
const octokit = require("@octokit/rest")();

import { isoToYMD, tEr } from "./utilities";

const { client_id, client_secret } = {
    client_id:     process.env.GIT_CLIENT || tEr("Set GIT_CLIENT env variable"),
    client_secret: process.env.GIT_SECRET || tEr("Set GIT_SECRET env variable")
}

interface ScrapeOptions {
    sort: string;
    order: string;
    page: number;
    limit: number;
    per_page: number;
}

// const isoToYMD : Function = function isoToYMD(date: )

class GithubScarper extends EventEmitter {
    private q: string;
    private sort: string;
    private order: string;
    private page: number;
    private per_page: number;
    private date: number;
    private lastDate: number;
    private lastStatus: number;
    private limit: number;
    constructor(query: string, opts: any) {
        super();
        if(queryValidator(query)) {
            this.q = query;
        }
        this.sort = opts.sort  || "updated";
        this.order = opts.order || "desc";
        this.page = opts.page || 1;
        this.per_page = opts.per_page || "100"
    }

    on200(resObj: any) {
        const { data, status, page, date } = resObj;
        this.page = page + 1;
        this.date = date;
        this.emit("saveRepos", data.items);
        const newDate = isoToYMD(new Date(data.items[data.items.length - 1].pushed_at));
        this.lastDate = newDate;
        this.lastStatus = status;
        process.nextTick(() => this.scrapeRepos({ limit: this.limit } as ScrapeOptions));
    }

    on403(resObj: any) {
        const { status, page, date, lastDate } = resObj;
        console.log("Out of requests, pausing for a minute");
        setTimeout(() => AwesomeScraper.emit("grabAll", page
                                                      , date
                                                      , lastDate
                                                      , status), 60 * 1000);
    }

    handleResponse(resObj: any) {
        const { status, err } = resObj;
        if(status === 200) {
            this.on200(resObj);
        } else if(status === 403) {
            this.on403(resObj);
        } else if(status === 422) {
            this.on422(resObj);
        } else {
            console.log(err);
            throw new Error(`Unexpected status: ${status}, exiting`);
        }
    }

    scrapeRepos(opts: ScrapeOptions) {
        if(!opts.limit) tEr("Must pass object with limit value to scrapeRepos");
        for(let i = 0; i < opts.limit; i++) {
            octokit.search.repos({
                q: this.q,
                sort: opts.sort || this.sort,
                order: opts.order || this.order,
                per_page: opts.per_page || this.per_page,
                client_id,
                client_secret,
                page: opts.page || this.page
            }, (err: any, res: any): any => {
                const { data, status } = {
                    data: res && res.data,
                    status: (res && res.status)
                }
                this.handleResponse({ data, status, err });
            })
        }
    }

    start() {
        octokit.misc.getRateLimit({
            client_id: process.env.GIT_CLIENT,
            client_secret: process.env.GIT_SECRET,    
        }).then((result: any): any => {
            const limit = result.data.resources.search.limit;
            if(limit) {
                console.log("?");
                this.scrapeRepos(limit)
            } else {
                const now = Date.now();
                const res = result.data.resources.search.reset * 1e3; // convert to seconds
                const offset = (res - now) + 1e3; // add one second
                console.log(`No requests remaining, pausing for ${offset / 1000} seconds then beginning scrape`);
                setTimeout(() => this.start(), offset);
            }
        }).catch((err: any): any => console.log(err));
    }

    test() {
        this.emit("error");
    }

    err() {
        throw new Error();
    }

    // testAsyncMethod(data) {
    //     this.emit('data', data);
    // }
}

let g = new GithubScarper("awesome language:python,javascript -pushed:2018-06-27T21:08:07Z..2018-07-12");
g.start();

// g.on("e", () => { throw new Error("DOOPY BOOPS") });

// g.on("error", () => console.log("EEE"));
// g.emit("e");
// g.err();
// g.emit("error");
// g.test();
// module.exports = YourLibrary
