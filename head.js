// const assertEqual = require("../assertEqual");

const head = function (array) {
  const firstElement = array[0];

  return firstElement;
};

// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(
//       "👽👽👽 Assertion Passed: " + `${actual}` + " === " + `${expected}`
//     );
//   } else if (actual !== expected) {
//     console.log(
//       "👽👽👽 Assertion Failed: " + `${actual}` + " !== " + `${expected}`
//     );
//   }
// };

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head;
