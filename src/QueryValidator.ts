import { QueryObject, Validators } from "./types";
import moment from "moment";

const validProps = ["user", "org", "in", "size", "forks", "stars", "created", "pushed", "updated",
                    "language", "topic", "topics", "license", "is", "mirror", "archived", "addl"];

const validLicenses = ["afl-3.0", "apache-2.0", "artistic-2.0", "bs1-1.0", "bsd-2-clause", "bsd-3-clause", "bsd-3-clause-clear", "cc", "cc0-1.0", "cc-by-4.0", "cc-by-sa-4.0", "wtfpl", "ecl-2.0", "epl-1.0", "eupl-1.1", "agpl-3.0", "gpl", "gpl-2.0", "gpl-3.0", "lgpl", "lgpl-2.1", "lgpl-3.0", "isc", "lppl-1.3c", "ms-pl", "mit", "mpl-2.0", "osl-3.0", "postgresql", "ofl-1.1", "ncsa", "unlicense", "zlib"];

// Utilities
const validString = function validString(str: string) : boolean {
    return typeof str === "string";
}

const validBool = function validBool(bool: boolean) : boolean {
    return (bool === true) || (bool === false);
}

const validDate = function validDate(isoDate: string) : boolean {
    const reg = /^\d{4}\-(?:0[1-9]|1[012])\-(?:0?[1-9]|[12][0-9]|3[01])(?:T(?:0[0-9]|1[0-9]|2[0-3])(?:\:[0-5]?\d)?(?:\:[0-5]?\d)?Z?(?:\+?|\+\d{2}(?:\:\d{2})?)?)?$/;
    return reg.test(isoDate);
}

const validGitName = function validGitName(name: string) : boolean {
    const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,37}$/i;
    return regex.test(name);
}

// Validates user/org
const validUserName = function validUserName(usrnm: string) : boolean {
    return validGitName(usrnm);
}

const validOrgName = function validOrgName(usrnm: string): boolean {
    return validGitName(usrnm);
}

// Validates size/forks/stars/topics
const validRange = function validRange(rng: string) : boolean {
    // Checks for <1232, <=1231, >1231, >=1232, 3423..*, *..3423, 323..545
    const reg = /^(?:(?:<=\d+|<\d+|>=\d+|>\d+|\*\.\.\d+|\d+\.\.\*|\d+\.\.\d+)$|\d+$)/gm;
    return reg.test(rng);
}

// Validates in
const validIn = function validIn(val: string) : boolean {
    return (val === "description") || (val === "name") || (val === "readme");
}

// Validates Language
const validLang = function validLang(lang: string) : boolean {
    return validString(lang);
}

// Validates Topic
const validTopic = function validTopic(topic: string) : boolean {
    return validString(topic);
}

// Validates Addl
const validAddl = function validAddl(addl: string) : boolean {
    return validString(addl);;
}

// Validates License
const validLicense = function validLicense(lice: string) : boolean {
    return validLicenses.includes(lice);
}

const validCreated = function validCreated(created: string) : boolean {
    return validDate(created);
}

const validPushed = function validPushed(pushed: string) : boolean {
    return validDate(pushed);
}

const validUpdated = function validUpdated(updated: string) : boolean {
    return validDate(updated);
}

const validMirror = function validMirror(mirr: boolean) : boolean {
    return validBool(mirr);
}

const validArchived = function validArchived(arch: boolean) : boolean {
    return validBool(arch);
}

// Validates is
const validIs = function validIs(is: string) : boolean {
    return (is === "public") || (is === "private");
}

// Validates Boolean

const validKey = function validKey(key: string) : boolean {
    return validProps.includes(key);
}

const validKeys = function validKeys(queryObj: QueryObject) : boolean {
    return Object.keys(queryObj).every(e => validKey(e));
}

export {
    validUserName,
    validOrgName,
    validRange,
    validIn,
    validLang,
    validTopic,
    validAddl,
    validLicense,
    validIs,
    validBool,
    validDate,
    validKey,
    validKeys
}

const validators : Validators = {
    user: validUserName,
    org: validOrgName,
    in: validIn,
    size: validRange,
    forks: validRange,
    stars: validRange,
    created: validCreated,
    pushed: validPushed,
    updated: validUpdated,
    language: validLang,
    topic: validTopic,
    topics: validRange,
    license: validLicense,
    is: validIs,
    mirror: validMirror, 
    archived: validArchived,
    addl: validAddl
}

const queryValidator = function queryValidator(queryObj: QueryObject) : boolean {
    if(!validKeys(queryObj)) return false;

}
