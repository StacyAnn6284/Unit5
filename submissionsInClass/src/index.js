function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = true;
  if (array[index].score < 60) {
    array[index].passed = false;
  }
}

function findSubmissionByName(array, name) {
  let student = array.find(name);
  return student;
}

function findLowestScore(array) {
  let lowestScore = 100;
  for (const submission of array) {
    if (submission.score < lowestScore) {
      lowestScore = submission.score;
    }
  }
  return lowestScore;
}

function findAverageScore(array) {
  let sum = 0;
  for (let x of array) {
    sum += x.score;
  }
  return sum / array.length;
}

function filterPassing(array) {
  return array.filter(value.passed === true);
}

function filter90AndAbove(array) {
  return array.filter(value.score >= 90);
}

exports.editSubmission = editSubmission;
exports.findSubmissionByName = findSubmissionByName;
exports.findLowestScore = findLowestScore;
exports.findAverageScore = findAverageScore;
exports.filterPassing = filterPassing;
exports.filter90AndAbove = filter90AndAbove;

// Declare a function named editSubmission
// Parameter(s): array, index, score
// Functionality: update an object's score in the array at the specified index. Use conditional statements
// to set the value for the passed property to true if the score is greater than or equal to 60 and false otherwise.

// Declare a function named findSubmissionByName
// Parameter(s): array, name
// Functionality: return the object in the array that has the provided name. Use the find method.

// Declare a function named findLowestScore
// Parameter(s): array
// Functionality: return the object in the array that has the lowest score. Use the forEach method to loop through the whole array.

// Declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

// Declare a function named filterPassing
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have passing scores.

// Declare a function named filter90AndAbove
// Parameter(s): array
// Functionality: return a new array using the filter method. The filter method should find objects in the array that have scores greater than or equal to 90.
