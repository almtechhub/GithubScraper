import { QueryObject, Validators } from "./types";

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
    const DATEREG = "\\d{4}(?:\\-(?:0[1-9]|1[012]))?(?:\\-(?:0[1-9]|[12][0-9]|3[01]))?(?:(?:T(?:0[0-9]|1[0-9]|2[0-3]))?(?:(?:\\:[0-5]\\d)(?:\\:[0-5]\\dZ?)?)?(?:\\+\\d{2}(?:\\:\\d{2})?)?)?";
    const reg = RegExp(`^(?:${DATEREG}|<=${DATEREG}|<${DATEREG}|>${DATEREG}|>=${DATEREG}|\\*\\.\\.${DATEREG}|${DATEREG}\\.\\.\\*|${DATEREG}\\.\\.${DATEREG})$`);
    return reg.test(isoDate);
}

const validGitName = function validGitName(name: string) : boolean {
    const regex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,37}$/i;
    return regex.test(name);
}

// Validates size/forks/stars/topics
const validRange = function validRange(rng: string) : boolean {
    // Checks for <1232, <=1231, >1231, >=1232, 3423..*, *..3423, 323..545
    const reg = /^(?:(?:<=\d+|<\d+|>=\d+|>\d+|\*\.\.\d+|\d+\.\.\*|\d+\.\.\d+)$|\d+$)/gm;
    return reg.test(rng);
}

const validUserName = function validUserName(usrnm: string) : boolean {
    return validGitName(usrnm);
}

const validOrgName = function validOrgName(usrnm: string): boolean {
    return validGitName(usrnm);
}

const validSize = function validSize(size: string) : boolean {
    return validRange(`${size}`);
}

const validForks = function validForks(forks: string) : boolean {
    return validRange(`${forks}`);
}

const validStars = function validStars(stars: string) : boolean {
    return validRange(`${stars}`);
}

const validTopics = function validTopics(topics: string) : boolean {
    return validRange(`${topics}`);
}

const validIn = function validIn(val: string) : boolean {
    return (val === "description") || (val === "name") || (val === "readme");
}

const validLang = function validLang(lang: string) : boolean {
    return validString(lang);
}

const validTopic = function validTopic(topic: string) : boolean {
    return validString(topic);
}

const validAddl = function validAddl(addl: string) : boolean {
    return validString(addl);;
}

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

const validIs = function validIs(is: string) : boolean {
    return (is === "public") || (is === "private");
}

const validKey = function validKey(key: string) : boolean {
    return validProps.includes(key);
}

const validKeys = function validKeys(queryObj: QueryObject) : boolean {
    return Object.keys(queryObj).every(e => validKey(e));
}

const validators : Validators = {
    user: validUserName,
    org: validOrgName,
    in: validIn,
    size: validSize,
    forks: validForks,
    stars: validStars,
    created: validCreated,
    pushed: validPushed,
    updated: validUpdated,
    language: validLang,
    topic: validTopic,
    topics: validTopics,
    license: validLicense,
    is: validIs,
    mirror: validMirror, 
    archived: validArchived,
    addl: validAddl
}

const valids = {
    user:    "38 character alphanumeric strings that do not begin with dashes, \n\tie: git-name but not -git-name",
    org:     "38 character alphanumeric strings that do not begin with dashes, \n\tie: git-name but not -git-name",
    in:      "One of: description, name, readme",
    size:    "Formats: #, <#, <=#, >#, >=#, #..*, *..#, #..#, \n\t github docs: https://help.github.com/articles/understanding-the-search-syntax/#query-for-values-greater-or-less-than-another-value",
    forks:   "Formats: #, <#, <=#, >#, >=#, #..*, *..#, #..#, \n\t github docs: https://help.github.com/articles/understanding-the-search-syntax/#query-for-values-greater-or-less-than-another-value",
    stars:   "Formats: #, <#, <=#, >#, >=#, #..*, *..#, #..#, \n\t github docs: https://help.github.com/articles/understanding-the-search-syntax/#query-for-values-greater-or-less-than-another-value",
    created: "github docs: https://help.github.com/articles/understanding-the-search-syntax/#query-for-dates",
    pushed:  "github docs: https://help.github.com/articles/understanding-the-search-syntax/#query-for-dates",
    updated: "github docs: https://help.github.com/articles/understanding-the-search-syntax/#query-for-dates",
    language: "Must be a valid string",
    topic: "Must be a valid string",
    topics: "Formats: #, <#, <=#, >#, >=#, #..*, *..#, #..#, \n\t github docs: https://help.github.com/articles/understanding-the-search-syntax/#query-for-values-greater-or-less-than-another-value",
    license: `License must be one of: ${validLicenses.reduce((a, c) => a += `\t\t\t\t\t\n${c}`, "")}`,
    is: "One of: public, private",
    mirror: "One of: true, false", 
    archived: "One of: true, false",
    addl: "Must be a valid string"
}

const queryValidator = function queryValidator(queryObj: QueryObject) : boolean {
    if(!validKeys(queryObj)) return false;
    for(const x in queryObj) {
        if(!validators[x](queryObj[x])) {
            throw new Error(`Invalid query prop, Key: ${x} Value: ${queryObj[x]}. \n\t ${valids[x]}`);
        }
    }
    return true;
}

export {
    validUserName,
    validOrgName,
    validIn,
    validStars,
    validForks,
    validSize,
    validCreated,
    validPushed,
    validUpdated,
    validLang,
    validTopic,
    validTopics,
    validLicense,
    validIs,
    validMirror, 
    validArchived,
    validAddl,
    validKeys,
    queryValidator
}
