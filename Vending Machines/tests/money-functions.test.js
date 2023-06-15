const { formatCurrency, getCoins } = require("../src/js/money-functions");

describe("formatCurrency function", () => {
  test("given 0, it returns $0.00", () => {
    expect(formatCurrency(0)).toEqual("$0.00");
  });
  test("given 1, it returns $1.00", () => {
    expect(formatCurrency(1)).toEqual("$1.00");
  });
  test("given 1.5, it returns $1.50", () => {
    expect(formatCurrency(1.5)).toEqual("$1.50");
  });
  test("given 0.01, it returns $0.01", () => {
    expect(formatCurrency(0.01)).toEqual("$0.01");
  });
  test("given 527.6789, it returns $527.68", () => {
    expect(formatCurrency(527.6789)).toEqual("$527.68");
  });
  test("given -1, it returns -$1.00", () => {
    expect(formatCurrency(-1)).toEqual("-$1.00");
  });
  test("given -.01, it returns -$.01", () => {
    expect(formatCurrency(-0.01)).toEqual("-$0.01");
  });
  test("given 48989, it returns $48,989", () => {
    expect(formatCurrency(48989)).toEqual("$48989.00");
  });
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", () => {
    expect(getCoins(32)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2,
    });
  });
  test("10 cents produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", () => {
    expect(getCoins(10)).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0,
    });
  });
  test("27 cents produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", () => {
    expect(getCoins(27)).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2,
    });
  });
  test("68 cents produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", () => {
    expect(getCoins(68)).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3,
    });
  });
});
