const pigLatin = require("../src/index.js");

describe("Pig Latin Suite", function () {
  test("that apple becomes appleway", function () {
    expect(pigLatin("apple")).toEqual("appleway");
  });
  test("that else becomes elseway", function () {
    expect(pigLatin("else")).toEqual("elseway");
  });
  test("that iPhone becomes iphoneway", function () {
    expect(pigLatin("iPhone")).toEqual("iphoneway");
  });
  test("that off becomes offway", function () {
    expect(pigLatin("off")).toEqual("offway");
  });
  test("that under becomes underway", function () {
    expect(pigLatin("under")).toEqual("underway");
  });
  test("that giraffe becomes iraffegay", function () {
    expect(pigLatin("giraffe")).toEqual("iraffegay");
  });
  test("that yes becomes esyay", function () {
    expect(pigLatin("yes")).toEqual("esyay");
  });
  test("that trust becomes usttray", function () {
    expect(pigLatin("trust")).toEqual("usttray");
  });
  test("that string becomes ingstray", function () {
    expect(pigLatin("string")).toEqual("ingstray");
  });
  test("that Trust becomes usttray", function () {
    expect(pigLatin("Trust")).toEqual("usttray");
  });
  test("that please becomes easeplay", function () {
    expect(pigLatin("please")).toEqual("easeplay");
  });
});
