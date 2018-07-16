export interface QueryObject {
    user?: string,
    org?: string,
    in?: string,
    size?: number,
    forks?: number,
    stars?: number,
    created?: Date,
    pushed?: Date,
    updated?: Date,
    language?: string,
    topic?: string,
    topics?: number,
    license?: string,
    is?: string,
    mirror?: boolean, 
    archived?: boolean,
    addl?: string
}

export interface Validators {
    user: Function,
    org: Function,
    in: Function,
    size: Function,
    forks: Function,
    stars: Function,
    created: Function,
    pushed: Function,
    updated: Function,
    language: Function,
    topic: Function,
    topics: Function,
    license: Function,
    is: Function,
    mirror: Function, 
    archived: Function,
    addl: Function
}
