// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
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

assertEqual("Lighthouse Labs", "Bootcamp");

// assertEqual(1, 1);

module.exports = assertEqual;

/* HERE */

// const sum = function (a, b) {
//   return a + b;
// };

// console.assert(sum(1, 2) === 3);
// console.assert(sum(1, 20) === 3);
// /* TO  HERE */

// /* HERE */

// const sumBuggy = function (a, b) {
//   return a * b;
// };

// console.assert(sumBuggy(1, 2) === 3);

/* TO HERE */
