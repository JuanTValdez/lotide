const eqArrays = require("./eqArrays");

const assertArraysEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      "✅✅✅ Assertion Passed: " + `${actual}` + " === " + `${expected}`
    );
  } else if (actual !== expected) {
    console.log(
      "🛑🛑🛑 Assertion Failed: " + `${actual}` + " !== " + `${expected}`
    );
  }
};

// const eqArrays = function (array1, array2) {
//   if (String(array1) === String(array2)) {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// };

// Passes
// assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);

// Fails
// assertArraysEqual([1, 21, 3, 14], [81, 2, 83, 4]);

// assertArraysEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);

// assertArraysEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), [1, 2, 3, 4]);

// const assertArraysEquaact (actual, expected) {
//   if (String(actual) === String(expected)) {
//     console.log(
//       "👽👽👽 Assertion Passed: " + `${actual}` + " === " + `${expected}`
//     );
//   } else if (String(actual) !== String(expected)) {
//     console.log(
//       "👽👽👽 Assertion Failed: " + `${actual}` + " !== " + `${expected}`
//     );
//   }
// };
module.exports = assertArraysEqual;
