import { EventEmitter } from "events";
import { queryValidator } from "github-query-validator";
const octokit = require("@octokit/rest")();

const isToYMD : Function = function isoToYMD(date: Date) : string {
    return date.toISOString().split('T')[0];
}

const tomorrow : Function = function tomrrow() : Date {
    const tomorrow = new Date();
    incDay(tomorrow);
    return tomorrow;
}

const incSec : Function = function incSec(date: Date) : Date {
    date.setSeconds(date.getSeconds() + 1);
    return date;
}

const incDay : Function = function incDay(date: Date) : Date {
    date.setDate(date.getDate() + 1);
    return date;
}

const tEr = function tEr(err: any): void {
    throw new Error(err);
}

const page = 1;

const { client_id, client_secret } = {
    client_id:     process.env.GIT_CLIENT || tEr("Set GIT_CLIENT env variable"),
    client_secret: process.env.GIT_SECRET || tEr("Set GIT_SECRET env variable")
}

// const isoToYMD : Function = function isoToYMD(date: )

class GithubScarper extends EventEmitter {
    private q: string;
    constructor(query: string) {
        super();
        if(queryValidator(query)) {
            this.q = query;
        }
    }

    start() {
        for(let i = 0; i < 30; i++) {
            octokit.search.repos({
                q: "awesome language:python,javascript -pushed:2018-06-27T21:08:07Z..2018-07-12",
                sort: "updated",
                order: "desc",
                per_page: "100",
                client_id,
                client_secret,
                page
            }, (err: any, res: any): any => {
                const { data, status } = {
                    data: res && res.data,
                    status: (res && res.status) || (err && err.code)
                }
                // console.log(data.items);
            
                // console.log(data.items[99]);
                // AwesomeScraper.emit("handleResponse", {data, status, page, date, lastDate, lastStatus});
            })
        }
        octokit.misc.getRateLimit({
            client_id: process.env.GIT_CLIENT,
            client_secret: process.env.GIT_SECRET,    
        }).then((result: any): any => {
            console.log(result);
            const d = new Date();
            console.log(d);
            console.log(new Date(result.data.resources.search.reset * 1000));
            if(result.data.resources.search.remaining === 30) {
                console.log("?");
                // AwesomeScraper.emit("grabAll");
            } else {
                const now = Date.now();
                const res = result.data.resources.search.reset * 1e3;
                const offset = (res - now) + 1e3;
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

let g = new GithubScarper("s");
g.start();

// g.on("e", () => { throw new Error("DOOPY BOOPS") });

// g.on("error", () => console.log("EEE"));
// g.emit("e");
// g.err();
// g.emit("error");
// g.test();
// module.exports = YourLibrary
