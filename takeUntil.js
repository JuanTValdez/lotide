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

const takeUntil = function (array, callback) {
  // ...
  const results = [];
  for (let item of array) {
    if (callback(item) === false) {
      results.push(item);
    } else if (callback(item) === true) {
      console.log(results);
      return results;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);
console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
// console.log(results2);
