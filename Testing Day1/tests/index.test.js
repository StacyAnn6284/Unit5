const { add, characterCount, canVote } = require("../src/index");

describe("Add function", function () {
  test("Adding 2 and 2 is 4", function () {
    expect(add(2, 2)).toEqual(4);
  });
  test("Adding 0 and 0 is 0 ", function () {
    expect(add(0, 0)).toEqual(0);
  });
  test("Adding -1 and -1 is -2 ", function () {
    expect(add(-1, -1)).toEqual(-2);
  });
  test("Adding 'a' with 3 is a3", function () {
    expect(add("a", 3)).toEqual("a3");
  });

  test("empty results in 0", function () {
    expect(add()).toEqual(NaN);
  });
});

describe("characterCount function", function () {
  test("Count of the word 'dog' is 3", () => {
    expect(characterCount("dog")).toEqual(3);
  });
  test("Count of the word '' is 0", () => {
    expect(characterCount("")).toEqual(0);
  });
  test("Count of the word 'onetwothreefourfive' is 19", () => {
    expect(characterCount("onetwothreefourfive")).toEqual(19);
  });
  test("empty input is 0", () => {
    expect(characterCount()).toEqual(0);
  });
});

describe("canVote function", function () {
  test("17 is false", () => {
    expect(canVote(17)).toEqual(false);
  });
  test("19 is true", () => {
    expect(canVote(19)).toEqual(true);
  });
  test("'nineteen' to be undefined", () => {
    expect(canVote("nineteen")).toEqual(undefined);
  });
});

describe("vowelCount function", function () {
  test("'tree' is 2", () => {
    expect(vowelCount("tree")).toEqual(2);
  });
  test("'any' is 1", () => {
    expect(vowelCount("any")).toEqual(1);
  });
  test("2 is 0", () => {
    expect(vowelCount(2)).toEqual(0);
  });
});
