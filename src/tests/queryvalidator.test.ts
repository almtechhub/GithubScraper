import {
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
  validAddl
} from "../QueryValidator"

test('validUserName', () => {
  expect(validUserName("23f23fsdf")).toBe(true);
  expect(validUserName("name1")).toBe(true);
  expect(validUserName("12345678912345678912345678912s34567891")).toBe(true);
  expect(validUserName("fashSSgrdhnyjlsmfioejajreguinflns-lrui")).toBe(true);
  expect(validUserName("a3F3af33-fwsfe4w")).toBe(true);
  expect(validUserName("a")).toBe(true);

  expect(validUserName("-23f23fsdf")).toBe(false);
  expect(validUserName("")).toBe(false);
  expect(validUserName("12345678912345678912345678912s345678913")).toBe(false);
  expect(validUserName("fashSSgrdhnyjlsmfioejajreguinflns-lrui2")).toBe(false);
  expect(validUserName("a#@4243F3af33-fwsfe4w")).toBe(false);
});

test('validOrgName', () => {
  expect(validOrgName("23f23fsdf")).toBe(true);
  expect(validOrgName("name1")).toBe(true);
  expect(validOrgName("12345678912345678912345678912s34567891")).toBe(true);
  expect(validOrgName("fashSSgrdhnyjlsmfioejajreguinflns-lrui")).toBe(true);
  expect(validOrgName("a3F3af33-fwsfe4w")).toBe(true);
  expect(validOrgName("a")).toBe(true);

  expect(validOrgName("-23f23fsdf")).toBe(false);
  expect(validOrgName("")).toBe(false);
  expect(validOrgName("12345678912345678912345678912s345678913")).toBe(false);
  expect(validOrgName("fashSSgrdhnyjlsmfioejajreguinflns-lrui2")).toBe(false);
  expect(validOrgName("a#@4243F3af33-fwsfe4w")).toBe(false);
});

test("validStars", () => {
  expect(validStars("23423")).toBe(true);
  expect(validStars("<23423")).toBe(true);
  expect(validStars("<=23423")).toBe(true);
  expect(validStars(">23423")).toBe(true);
  expect(validStars(">=23423")).toBe(true);
  expect(validStars("*..1232")).toBe(true);
  expect(validStars("31232..*")).toBe(true);
  expect(validStars("5434..1232")).toBe(true);

  expect(validStars("234s23")).toBe(false);
  expect(validStars(">2/3423")).toBe(false);
  expect(validStars(">=2/3423")).toBe(false);
  expect(validStars("<=2/3423")).toBe(false);
  expect(validStars("<2/3423")).toBe(false);
  expect(validStars("<.=23423")).toBe(false);
  expect(validStars("?>23423")).toBe(false);
  expect(validStars(">>=23423")).toBe(false);
  expect(validStars("*..1d232d")).toBe(false);
  expect(validStars("312#32..*")).toBe(false);
  expect(validStars("312#32#..*")).toBe(false);
  expect(validStars("312#32.$.*")).toBe(false);
  expect(validStars("312#32.$.*$")).toBe(false);
  expect(validStars("312#32..*23")).toBe(false);
  expect(validStars("5434...1232")).toBe(false);
  expect(validStars("5434%..1232")).toBe(false);
  expect(validStars("5434..$1232")).toBe(false);
  expect(validStars("5434..1232&")).toBe(false);
  expect(validStars("*$..1d232d")).toBe(false);
  expect(validStars("$*..1d232d")).toBe(false);
  expect(validStars("*..1d232d$")).toBe(false);
  expect(validStars("*.$.1d232d")).toBe(false);
});

test("validForks", () => {
  expect(validForks("23423")).toBe(true);
  expect(validForks("<23423")).toBe(true);
  expect(validForks("<=23423")).toBe(true);
  expect(validForks(">23423")).toBe(true);
  expect(validForks(">=23423")).toBe(true);
  expect(validForks("*..1232")).toBe(true);
  expect(validForks("31232..*")).toBe(true);
  expect(validForks("5434..1232")).toBe(true);

  expect(validForks("234s23")).toBe(false);
  expect(validForks(">2/3423")).toBe(false);
  expect(validForks(">=2/3423")).toBe(false);
  expect(validForks("<=2/3423")).toBe(false);
  expect(validForks("<2/3423")).toBe(false);
  expect(validForks("<.=23423")).toBe(false);
  expect(validForks("?>23423")).toBe(false);
  expect(validForks(">>=23423")).toBe(false);
  expect(validForks("*..1d232d")).toBe(false);
  expect(validForks("312#32..*")).toBe(false);
  expect(validForks("312#32#..*")).toBe(false);
  expect(validForks("312#32.$.*")).toBe(false);
  expect(validForks("312#32.$.*$")).toBe(false);
  expect(validForks("312#32..*23")).toBe(false);
  expect(validForks("5434...1232")).toBe(false);
  expect(validForks("5434%..1232")).toBe(false);
  expect(validForks("5434..$1232")).toBe(false);
  expect(validForks("5434..1232&")).toBe(false);
  expect(validForks("*$..1d232d")).toBe(false);
  expect(validForks("$*..1d232d")).toBe(false);
  expect(validForks("*..1d232d$")).toBe(false);
  expect(validForks("*.$.1d232d")).toBe(false);
});

test("validSize", () => {
  expect(validSize("23423")).toBe(true);
  expect(validSize("<23423")).toBe(true);
  expect(validSize("<=23423")).toBe(true);
  expect(validSize(">23423")).toBe(true);
  expect(validSize(">=23423")).toBe(true);
  expect(validSize("*..1232")).toBe(true);
  expect(validSize("31232..*")).toBe(true);
  expect(validSize("5434..1232")).toBe(true);

  expect(validSize("234s23")).toBe(false);
  expect(validSize(">2/3423")).toBe(false);
  expect(validSize(">=2/3423")).toBe(false);
  expect(validSize("<=2/3423")).toBe(false);
  expect(validSize("<2/3423")).toBe(false);
  expect(validSize("<.=23423")).toBe(false);
  expect(validSize("?>23423")).toBe(false);
  expect(validSize(">>=23423")).toBe(false);
  expect(validSize("*..1d232d")).toBe(false);
  expect(validSize("312#32..*")).toBe(false);
  expect(validSize("312#32#..*")).toBe(false);
  expect(validSize("312#32.$.*")).toBe(false);
  expect(validSize("312#32.$.*$")).toBe(false);
  expect(validSize("312#32..*23")).toBe(false);
  expect(validSize("5434...1232")).toBe(false);
  expect(validSize("5434%..1232")).toBe(false);
  expect(validSize("5434..$1232")).toBe(false);
  expect(validSize("5434..1232&")).toBe(false);
  expect(validSize("*$..1d232d")).toBe(false);
  expect(validSize("$*..1d232d")).toBe(false);
  expect(validSize("*..1d232d$")).toBe(false);
  expect(validSize("*.$.1d232d")).toBe(false);
});

test("validTopics", () => {
  expect(validTopics("23423")).toBe(true);
  expect(validTopics("<23423")).toBe(true);
  expect(validTopics("<=23423")).toBe(true);
  expect(validTopics(">23423")).toBe(true);
  expect(validTopics(">=23423")).toBe(true);
  expect(validTopics("*..1232")).toBe(true);
  expect(validTopics("31232..*")).toBe(true);
  expect(validTopics("5434..1232")).toBe(true);

  expect(validTopics("234s23")).toBe(false);
  expect(validTopics(">2/3423")).toBe(false);
  expect(validTopics(">=2/3423")).toBe(false);
  expect(validTopics("<=2/3423")).toBe(false);
  expect(validTopics("<2/3423")).toBe(false);
  expect(validTopics("<.=23423")).toBe(false);
  expect(validTopics("?>23423")).toBe(false);
  expect(validTopics(">>=23423")).toBe(false);
  expect(validTopics("*..1d232d")).toBe(false);
  expect(validTopics("312#32..*")).toBe(false);
  expect(validTopics("312#32#..*")).toBe(false);
  expect(validTopics("312#32.$.*")).toBe(false);
  expect(validTopics("312#32.$.*$")).toBe(false);
  expect(validTopics("312#32..*23")).toBe(false);
  expect(validTopics("5434...1232")).toBe(false);
  expect(validTopics("5434%..1232")).toBe(false);
  expect(validTopics("5434..$1232")).toBe(false);
  expect(validTopics("5434..1232&")).toBe(false);
  expect(validTopics("*$..1d232d")).toBe(false);
  expect(validTopics("$*..1d232d")).toBe(false);
  expect(validTopics("*..1d232d$")).toBe(false);
  expect(validTopics("*.$.1d232d")).toBe(false);
});

test("validCreated", () => {
  expect(validCreated("2012")).toBe(true);
  expect(validCreated("2012-07")).toBe(true);
  expect(validCreated("2012-07-07")).toBe(true);
  expect(validCreated("2012-07-07")).toBe(true);
  expect(validCreated("2012-07-07T21")).toBe(true);
  expect(validCreated("2012-07-07T21+99")).toBe(true);
  expect(validCreated("2012-07-07T21:21")).toBe(true);
  expect(validCreated("2012-07-07T21+99")).toBe(true);
  expect(validCreated("2012-07-07T21:21:21")).toBe(true);
  expect(validCreated("2012-07-07T21:21:21Z")).toBe(true);
  expect(validCreated("2012-07-07T21:21:21Z+99")).toBe(true);
  expect(validCreated("2012-07-07T21:21:21+99")).toBe(true);
  expect(validCreated("2012-07-07T21+99")).toBe(true);
  expect(validCreated("2012-07-07T21:21+99")).toBe(true);
  expect(validCreated("2012-07-07T21:21:21Z+99:99")).toBe(true);
  expect(validCreated("2012-07-07T21:21:21+99:99")).toBe(true);
  expect(validCreated("2012-07-07T21+99:99")).toBe(true);
  expect(validCreated("2012-07-07T21:21+99:99")).toBe(true);

  expect(validCreated("2012-")).toBe(false);
  expect(validCreated("2012-0")).toBe(false);
  expect(validCreated("2012-07-")).toBe(false);
  expect(validCreated("2012-07-0")).toBe(false);
  expect(validCreated("2012-07-07T")).toBe(false);
  expect(validCreated("2012-07-07T2")).toBe(false);
  expect(validCreated("2012-07-07T21:")).toBe(false);
  expect(validCreated("2012-07-07T21:2")).toBe(false);
  expect(validCreated("2012-07-07T21:21:")).toBe(false);
  expect(validCreated("2012-07-07T21:21:2")).toBe(false);
  expect(validCreated("2012-07-07T21:21:21Z+")).toBe(false);
  expect(validCreated("2012-07-07T21Z+9")).toBe(false);
  expect(validCreated("2012-07-07T21:21Z+99+")).toBe(false);
  expect(validCreated("2012-07-07T21:21:21+99+")).toBe(false);
  expect(validCreated("2012-07-07T21+99+")).toBe(false);
  expect(validCreated("2012-07-07T21:21+99+")).toBe(false);
  expect(validCreated("2012-07-07T21:21:21Z+99:99+")).toBe(false);
  expect(validCreated("2012-07-07T21Z+99:99+")).toBe(false);
  expect(validCreated("2012-07-07T21:21Z+")).toBe(false);
  expect(validCreated("2012-07-07T21:21:21+:99")).toBe(false);
  expect(validCreated("2012-07-07T21+99:99+")).toBe(false);
  expect(validCreated("2012-07-07T21:21+99:99+")).toBe(false);
  expect(validCreated("2012-07-07T21Z")).toBe(false);
  expect(validCreated("2012-07-07T21:21Z")).toBe(false);
  expect(validCreated("2012-07-07T21Z+99")).toBe(false);
  expect(validCreated("2012-07-07T21:21Z+99")).toBe(false);
  expect(validCreated("2012-07-07T21Z+99:99")).toBe(false);
  expect(validCreated("2012-07-07T21:21Z+99:99")).toBe(false);
});

test("validPushed", () => {
  expect(validPushed("2012")).toBe(true);
  expect(validPushed("2012-07")).toBe(true);
  expect(validPushed("2012-07-07")).toBe(true);
  expect(validPushed("2012-07-07")).toBe(true);
  expect(validPushed("2012-07-07T21")).toBe(true);
  expect(validPushed("2012-07-07T21+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21")).toBe(true);
  expect(validPushed("2012-07-07T21+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21Z")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21Z+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21+99")).toBe(true);
  expect(validPushed("2012-07-07T21+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21Z+99:99")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21+99:99")).toBe(true);
  expect(validPushed("2012-07-07T21+99:99")).toBe(true);
  expect(validPushed("2012-07-07T21:21+99:99")).toBe(true);

  expect(validPushed("2012-")).toBe(false);
  expect(validPushed("2012-0")).toBe(false);
  expect(validPushed("2012-07-")).toBe(false);
  expect(validPushed("2012-07-0")).toBe(false);
  expect(validPushed("2012-07-07T")).toBe(false);
  expect(validPushed("2012-07-07T2")).toBe(false);
  expect(validPushed("2012-07-07T21:")).toBe(false);
  expect(validPushed("2012-07-07T21:2")).toBe(false);
  expect(validPushed("2012-07-07T21:21:")).toBe(false);
  expect(validPushed("2012-07-07T21:21:2")).toBe(false);
  expect(validPushed("2012-07-07T21:21:21Z+")).toBe(false);
  expect(validPushed("2012-07-07T21Z+9")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z+99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21:21+99+")).toBe(false);
  expect(validPushed("2012-07-07T21+99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21+99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21:21Z+99:99+")).toBe(false);
  expect(validPushed("2012-07-07T21Z+99:99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z+")).toBe(false);
  expect(validPushed("2012-07-07T21:21:21+:99")).toBe(false);
  expect(validPushed("2012-07-07T21+99:99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21+99:99+")).toBe(false);
  expect(validPushed("2012-07-07T21Z")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z")).toBe(false);
  expect(validPushed("2012-07-07T21Z+99")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z+99")).toBe(false);
  expect(validPushed("2012-07-07T21Z+99:99")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z+99:99")).toBe(false);
});

test("validUpdated", () => {
  expect(validUpdated("2012")).toBe(true);
  expect(validUpdated("2012-07")).toBe(true);
  expect(validUpdated("2012-07-07")).toBe(true);
  expect(validUpdated("2012-07-07")).toBe(true);
  expect(validUpdated("2012-07-07T21")).toBe(true);
  expect(validUpdated("2012-07-07T21+99")).toBe(true);
  expect(validUpdated("2012-07-07T21:21")).toBe(true);
  expect(validUpdated("2012-07-07T21+99")).toBe(true);
  expect(validUpdated("2012-07-07T21:21:21")).toBe(true);
  expect(validUpdated("2012-07-07T21:21:21Z")).toBe(true);
  expect(validUpdated("2012-07-07T21:21:21Z+99")).toBe(true);
  expect(validUpdated("2012-07-07T21:21:21+99")).toBe(true);
  expect(validUpdated("2012-07-07T21+99")).toBe(true);
  expect(validUpdated("2012-07-07T21:21+99")).toBe(true);
  expect(validUpdated("2012-07-07T21:21:21Z+99:99")).toBe(true);
  expect(validUpdated("2012-07-07T21:21:21+99:99")).toBe(true);
  expect(validUpdated("2012-07-07T21+99:99")).toBe(true);
  expect(validUpdated("2012-07-07T21:21+99:99")).toBe(true);

  expect(validUpdated("2012-")).toBe(false);
  expect(validUpdated("2012-0")).toBe(false);
  expect(validUpdated("2012-07-")).toBe(false);
  expect(validUpdated("2012-07-0")).toBe(false);
  expect(validUpdated("2012-07-07T")).toBe(false);
  expect(validUpdated("2012-07-07T2")).toBe(false);
  expect(validUpdated("2012-07-07T21:")).toBe(false);
  expect(validUpdated("2012-07-07T21:2")).toBe(false);
  expect(validUpdated("2012-07-07T21:21:")).toBe(false);
  expect(validUpdated("2012-07-07T21:21:2")).toBe(false);
  expect(validUpdated("2012-07-07T21:21:21Z+")).toBe(false);
  expect(validUpdated("2012-07-07T21Z+9")).toBe(false);
  expect(validUpdated("2012-07-07T21:21Z+99+")).toBe(false);
  expect(validUpdated("2012-07-07T21:21:21+99+")).toBe(false);
  expect(validUpdated("2012-07-07T21+99+")).toBe(false);
  expect(validUpdated("2012-07-07T21:21+99+")).toBe(false);
  expect(validUpdated("2012-07-07T21:21:21Z+99:99+")).toBe(false);
  expect(validUpdated("2012-07-07T21Z+99:99+")).toBe(false);
  expect(validUpdated("2012-07-07T21:21Z+")).toBe(false);
  expect(validUpdated("2012-07-07T21:21:21+:99")).toBe(false);
  expect(validUpdated("2012-07-07T21+99:99+")).toBe(false);
  expect(validUpdated("2012-07-07T21:21+99:99+")).toBe(false);
  expect(validUpdated("2012-07-07T21Z")).toBe(false);
  expect(validUpdated("2012-07-07T21:21Z")).toBe(false);
  expect(validUpdated("2012-07-07T21Z+99")).toBe(false);
  expect(validUpdated("2012-07-07T21:21Z+99")).toBe(false);
  expect(validUpdated("2012-07-07T21Z+99:99")).toBe(false);
  expect(validUpdated("2012-07-07T21:21Z+99:99")).toBe(false);
});

test("validCreated", () => {
  expect(validPushed("2012")).toBe(true);
  expect(validPushed("2012-07")).toBe(true);
  expect(validPushed("2012-07-07")).toBe(true);
  expect(validPushed("2012-07-07")).toBe(true);
  expect(validPushed("2012-07-07T21")).toBe(true);
  expect(validPushed("2012-07-07T21+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21")).toBe(true);
  expect(validPushed("2012-07-07T21+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21Z")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21Z+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21+99")).toBe(true);
  expect(validPushed("2012-07-07T21+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21+99")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21Z+99:99")).toBe(true);
  expect(validPushed("2012-07-07T21:21:21+99:99")).toBe(true);
  expect(validPushed("2012-07-07T21+99:99")).toBe(true);
  expect(validPushed("2012-07-07T21:21+99:99")).toBe(true);

  expect(validPushed("2012-")).toBe(false);
  expect(validPushed("2012-0")).toBe(false);
  expect(validPushed("2012-07-")).toBe(false);
  expect(validPushed("2012-07-0")).toBe(false);
  expect(validPushed("2012-07-07T")).toBe(false);
  expect(validPushed("2012-07-07T2")).toBe(false);
  expect(validPushed("2012-07-07T21:")).toBe(false);
  expect(validPushed("2012-07-07T21:2")).toBe(false);
  expect(validPushed("2012-07-07T21:21:")).toBe(false);
  expect(validPushed("2012-07-07T21:21:2")).toBe(false);
  expect(validPushed("2012-07-07T21:21:21Z+")).toBe(false);
  expect(validPushed("2012-07-07T21Z+9")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z+99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21:21+99+")).toBe(false);
  expect(validPushed("2012-07-07T21+99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21+99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21:21Z+99:99+")).toBe(false);
  expect(validPushed("2012-07-07T21Z+99:99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z+")).toBe(false);
  expect(validPushed("2012-07-07T21:21:21+:99")).toBe(false);
  expect(validPushed("2012-07-07T21+99:99+")).toBe(false);
  expect(validPushed("2012-07-07T21:21+99:99+")).toBe(false);
  expect(validPushed("2012-07-07T21Z")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z")).toBe(false);
  expect(validPushed("2012-07-07T21Z+99")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z+99")).toBe(false);
  expect(validPushed("2012-07-07T21Z+99:99")).toBe(false);
  expect(validPushed("2012-07-07T21:21Z+99:99")).toBe(false);
});

test("validIn", () => {
  expect(validIn("description")).toBe(true);
  expect(validIn("name")).toBe(true);
  expect(validIn("readme")).toBe(true);

  expect(validIn("rer")).toBe(false);
  expect(validIn("gse")).toBe(false);
  expect(validIn("@")).toBe(false);
});

test("validLang", () => {
  expect(validLang("c++")).toBe(true);
  expect(validLang("java")).toBe(true);
  expect(validLang("python3")).toBe(true);
});

test("validTopic", () => {
  expect(validTopic("topic1")).toBe(true);
  expect(validTopic("topic2")).toBe(true);
  expect(validTopic("topic3")).toBe(true);
});

test("validAddl", () => {
  expect(validAddl("string1")).toBe(true);
  expect(validAddl("string2")).toBe(true);
  expect(validAddl("string3")).toBe(true);
});

test("validLicense", () => {
  const validLicenses = ["afl-3.0", "apache-2.0", "artistic-2.0", "bs1-1.0", "bsd-2-clause", "bsd-3-clause", "bsd-3-clause-clear", "cc", "cc0-1.0", "cc-by-4.0", "cc-by-sa-4.0", "wtfpl", "ecl-2.0", "epl-1.0", "eupl-1.1", "agpl-3.0", "gpl", "gpl-2.0", "gpl-3.0", "lgpl", "lgpl-2.1", "lgpl-3.0", "isc", "lppl-1.3c", "ms-pl", "mit", "mpl-2.0", "osl-3.0", "postgresql", "ofl-1.1", "ncsa", "unlicense", "zlib"];
  validLicenses.map(e => expect(validLicense(e)).toBe(true));

  expect(validLicense("string1")).toBe(false);
  expect(validLicense("string2")).toBe(false);
  expect(validLicense("string3")).toBe(false);
});

test("validIs", () => {
  expect(validIs("public")).toBe(true);
  expect(validIs("private")).toBe(true);
  
  expect(validIs("asdasdas")).toBe(false);
});

test("validMirror", () => {
  expect(validMirror(true)).toBe(true);
  expect(validMirror(false)).toBe(true);
});

test("validArchived", () => {
  expect(validArchived(true)).toBe(true);
  expect(validArchived(false)).toBe(true);
});
