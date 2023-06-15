const {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
} = require("../src/js/cart-functions");

describe("calculateChange function", () => {
  test("total of 5 and payment of 6 returns 1", () => {
    expect(calculateChange(5, 6)).toEqual(1);
  });
  test("total of 12.30 and payment of 13.03 returns 0.73", () => {
    expect(calculateChange(12.3, 13.03)).toEqual(0.73);
  });
  test("total of 22.50 and payment of 30 returns 7.50", () => {
    expect(calculateChange(22.5, 30)).toEqual(7.5);
  });
});

describe("isSufficientPayment function", () => {
  test("total of 5 and payment of 6 returns true", () => {
    expect(isSufficientPayment(5, 6)).toEqual(true);
  });
  test("total of 10 and payment of 7 returns false", () => {
    expect(isSufficientPayment(10, 7)).toEqual(false);
  });
  test("total of 3 and payment of 3 returns true", () => {
    expect(isSufficientPayment(3, 3)).toEqual(true);
  });
  test("total of 10 and payment 2 returns true", () => {
    expect(isSufficientPayment(10, 2)).toEqual(false);
  });
});

describe("calculateTotal function", () => {
  test("Given an itemsArray of one item with price 4.99, it returns 4.99", () => {
    expect(calculateTotal([{ name: "jelly", price: 4.99 }])).toEqual(4.99);
  });
  test("Given an itemsArray of three items with prices 3.50, 12.99, and 0.03, it returns 16.52.", () => {
    expect(
      calculateTotal([{ price: 3.5 }, { price: 12.99 }, { price: 0.03 }])
    ).toEqual(16.52);
  });
  test("Given an empty itemsArray, it returns 0", () => {
    expect(calculateTotal()).toEqual(0);
  });
  test("Given an itemsArray of two items with prices 2.00 and 3.00, it returns 5.00", () => {
    expect(calculateTotal([{ price: 2.0 }, { price: 3.0 }])).toEqual(5.0);
  });
});

describe("addItem", () => {
  test("add addItem with an empty itemsArray, name 'Bean' and price 3, array has one item {name: 'Beans', price: 3}", () => {
    const itemsArray = [];
    addItem(itemsArray, "Beans", 3);
    expect(itemsArray).toEqual([{ name: "Beans", price: 3 }]);
  });
  test("Create an itemsArray with beans in it. Call addItem to add sugar. Then check that itemsArray has two items in it: beans and sugar", () => {
    const itemsArray = [{ name: "Beans", price: 3 }];
    addItem(itemsArray, "Sugar", 2);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Create an itemsArray with 3 items in it. Add 2 items. Then check that itemsArray has 5 items in it", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 3 },
    ];
    addItem(itemsArray, "Butter", 5);
    addItem(itemsArray, "Eggs", 4);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 3 },
      { name: "Butter", price: 5 },
      { name: "Eggs", price: 4 },
    ]);
  });
});

describe("removeItem function", () => {
  test("Remove the first element from an array of three items", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 3 },
    ];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 3 },
    ]);
  });
  test("Remove the last element from an array of three items.", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 3 },
    ];
    removeItem(itemsArray, 2);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
    ]);
  });
  test("Remove the middle element from an array of three items", () => {
    const itemsArray = [
      { name: "Beans", price: 3 },
      { name: "Sugar", price: 2 },
      { name: "Flour", price: 3 },
    ];
    removeItem(itemsArray, 1);
    expect(itemsArray).toEqual([
      { name: "Beans", price: 3 },
      { name: "Flour", price: 3 },
    ]);
  });
  test("Remove the only element from an array of one item", () => {
    const itemsArray = [{ name: "Beans", price: 3 }];
    removeItem(itemsArray, 0);
    expect(itemsArray).toEqual([]);
  });
});

// describe("characterCount function", function () {
//   test("Count of the word 'dog' is 3", () => {
//     expect(characterCount("dog")).toEqual(3);
//   });
