import { EventEmitter } from "events";

// const isoToYMD : Function = function isoToYMD(date: )

class GithubScarper extends EventEmitter {
    constructor(readonly s: string) {
        super();
    }

    err() {
        throw new Error();
    }

    // testAsyncMethod(data) {
    //     this.emit('data', data);
    // }
}

let g = new GithubScarper("s");
// console.log(g.s);

g.on("e", () => { throw new Error("DOOPY BOOPS") });

g.on("error", () => console.log("EEE"));
// g.emit("e");
// g.err();
g.emit("error");
// module.exports = YourLibrary
