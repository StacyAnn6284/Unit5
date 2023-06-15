const {
  editSubmission,
  findSubmissionByName,
  findLowestScore,
  findAverageScore,
  filterPassing,
  filter90AndAbove,
} = require("../src/index");

describe("editSubmission function", () => {
  test("update first person's score to 20 and passed property changes to false", () => {
    const submissions = [
      { name: "Jane", score: 95, date: "2020-01-24", passed: true },
      { name: "Joe", score: 77, date: "2018-05-14", passed: true },
      { name: "Jack", score: 59, date: "2019-07-05", passed: false },
      { name: "Jill", score: 88, date: "2020-04-22", passed: true },
    ];
    editSubmission(submissions, 0, 20);
    expect(submissions[0].passed).toEqual(false);
    expect(submissions[0].score).toEqual(20);
  });
});

describe("findSubmissionbyName function", () => {
  test("returns correct submission by name", () => {
    const submissions = [
      { name: "Jane", score: 95, date: "2020-01-24", passed: true },
      { name: "Joe", score: 77, date: "2018-05-14", passed: true },
      { name: "Jack", score: 59, date: "2019-07-05", passed: false },
      { name: "Jill", score: 88, date: "2020-04-22", passed: true },
    ];
    expect(findSubmissionByName(submissions, "Jane")).toBe({
      name: "Jane",
      score: 95,
      date: "2020-01-24",
      passed: true,
    });
  });
});

// Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object's score in the array at the specified index. Use conditional statements
// to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.
