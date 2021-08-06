const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      "👽👽👽 Assertion Passed: " + `${actual}` + " === " + `${expected}`
    );
  } else if (actual !== expected) {
    console.log(
      "👽👽👽 Assertion Failed: " + `${actual}` + " !== " + `${expected}`
    );
  }
};

const eqArrays = function (array1, array2) {
  if (String(array1) === String(array2)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};
const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];
// const map = function (array, callback) {
//   const results = [];
//   for (let item of array) {
//     console.log("item BEFORE: ", item);
//     console.log("item AFTER: ", callback(item));
//     console.log("---");
//   }
//   return results;
// };
const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word);
// console.log(results1);

assertArraysEqual(eqArrays(results1, words), true);
assertArraysEqual(eqArrays(results1, numbers), false);
