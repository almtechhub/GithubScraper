import {
  validGitName,
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
} from "../QueryValidator"

test('validGitName', () => {
  expect(validGitName("23f23fsdf")).toBe(true);
  expect(validGitName("name1")).toBe(true);
  expect(validGitName("12345678912345678912345678912s34567891")).toBe(true);
  expect(validGitName("fashSSgrdhnyjlsmfioejajreguinflns-lrui")).toBe(true);
  expect(validGitName("a3F3af33-fwsfe4w")).toBe(true);
  expect(validGitName("a")).toBe(true);

  expect(validGitName("-23f23fsdf")).toBe(false);
  expect(validGitName("")).toBe(false);
  expect(validGitName("12345678912345678912345678912s345678913")).toBe(false);
  expect(validGitName("fashSSgrdhnyjlsmfioejajreguinflns-lrui2")).toBe(false);
  expect(validGitName("a#@4243F3af33-fwsfe4w")).toBe(false);
});

test("validRange", () => {
  expect(validRange("23423")).toBe(true);
  expect(validRange("<23423")).toBe(true);
  expect(validRange("<=23423")).toBe(true);
  expect(validRange(">23423")).toBe(true);
  expect(validRange(">=23423")).toBe(true);
  expect(validRange("*..1232")).toBe(true);
  expect(validRange("31232..*")).toBe(true);
  expect(validRange("5434..1232")).toBe(true);

  expect(validRange("234s23")).toBe(false);
  expect(validRange(">2/3423")).toBe(false);
  expect(validRange(">=2/3423")).toBe(false);
  expect(validRange("<=2/3423")).toBe(false);
  expect(validRange("<2/3423")).toBe(false);
  expect(validRange("<.=23423")).toBe(false);
  expect(validRange("?>23423")).toBe(false);
  expect(validRange(">>=23423")).toBe(false);
  expect(validRange("*..1d232d")).toBe(false);
  expect(validRange("312#32..*")).toBe(false);
  expect(validRange("312#32#..*")).toBe(false);
  expect(validRange("312#32.$.*")).toBe(false);
  expect(validRange("312#32.$.*$")).toBe(false);
  expect(validRange("312#32..*23")).toBe(false);
  expect(validRange("5434...1232")).toBe(false);
  expect(validRange("5434%..1232")).toBe(false);
  expect(validRange("5434..$1232")).toBe(false);
  expect(validRange("5434..1232&")).toBe(false);
  expect(validRange("*$..1d232d")).toBe(false);
  expect(validRange("$*..1d232d")).toBe(false);
  expect(validRange("*..1d232d$")).toBe(false);
  expect(validRange("*.$.1d232d")).toBe(false);
});

test("validIn", () => {
  expect(validIn("description")).toBe(true);
  expect(validIn("name")).toBe(true);
  expect(validIn("readme")).toBe(true);

  expect(validIn("rer")).toBe(false);
  expect(validIn("gse")).toBe(false);
  expect(validIn("@")).toBe(false);

});