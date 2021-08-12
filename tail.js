const tail = function (array) {
  const [head, ...tail] = array;

  const tailOfArray = tail;

  return tailOfArray.length;
};

module.exports = tail;
// assertEqual(tail([1, 2, 3, 4, 5]), JSON.stringify([2, 3, 4, 5]));
// tail([1, 2, 3, 4, 5]);
// assertEqual(tail([1, 2, 3, 4, 5]), 4);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 2);

// console.log("I'm all up in you're codes ");

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

// const tail = function (array) {
//   const [head, ...tail] = array;

//   console.log(JSON.stringify(tail));
//   return JSON.stringify(tail);
// };
