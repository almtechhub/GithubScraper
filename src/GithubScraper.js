const EventEmitter = require("events").EventEmitter;
const queryValidator = require("github-query-validator");
const octokit = require("@octokit/rest")();
const { isoToYMD, tEr } = require("./utilities.js");

const { client_id, client_secret } = {
    client_id:     process.env.GIT_CLIENT || tEr("Set GIT_CLIENT env variable"),
    client_secret: process.env.GIT_SECRET || tEr("Set GIT_SECRET env variable")
}

class GithubScarper extends EventEmitter {
    constructor(q) {
        if(!q) tEr("Must pass query to constructor");
        if(q.constuctor.name === "String") {
            queryValidator.queryValidator(q);
            this.q = q;
        } else if(q.constructor.name === "Object") {
            queryValidator.queryObjValidator(q);
            this.q = queryValidator.queryObjToString(q);
        } else {
            tEr("q must be a string or query object");
        }
        super();
        this.setRateLimit();
        this.q = q;
    }

    async setRateLimit() {
        const result = await octokit.misc.getRateLimit({
            client_id: process.env.GIT_CLIENT,
            client_secret: process.env.GIT_SECRET,    
        })
        this.limit = result.data.resources.search.limit;
    }

    async start() {
        // checks if our limit has been acquired, otherwise it retries start after a second
        if(!this.limit) {
            console.log("Rate limit has not been acquired from setRateLimit.");
            console.log("Waiting one second and re-trying start");
            setTimeout(this.start, 1000);
        }
        const result = await octokit.misc.getRateLimit({
            client_id: process.env.GIT_CLIENT,
            client_secret: process.env.GIT_SECRET,    
        });
        if(this.limit > 0) {
            // this.scrapeRepos();
        } else {
            const now = Date.now();
            const res = result.data.resources.search.reset * 1e3; // convert to seconds
            const offset = (res - now) + 1e3; // add one second
            console.log(`No requests remaining, pausing for ${offset / 1000} seconds then beginning scrape`);
            setTimeout(this.start, offset);
        }
    }
}

const gs = new GithubScarper();
gs.start();