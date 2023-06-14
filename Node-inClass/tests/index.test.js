const fizzbuzz = require("../src/fizzbuzz");

describe("FizzBuzz Suite", function () {
  test("that 3 becomes 'fizz'", function () {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  test("that 5 becomes 'buzz'", function () {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  test("that 15 becomes 'fizzbuzz'", function () {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });
  test("that 2 becomes 2", function () {
    expect(fizzbuzz(2)).toEqual(2);
  });
});
