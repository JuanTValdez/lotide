const assertArraysEqual = require("./assertArraysEqual");

const middle = function (array) {
  let middle = Math.round(array.length / 2);
  let newArray = [];
  if (array.length % 2 === 0) {
    newArray.push(array[middle - 1]);
    newArray.push(array[middle]);

    return newArray;
  }
  newArray.push(array[middle - 1]);

  return newArray;
};

// assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
// middle([1, 2, 3, 4, 5]) === [3];
// middle([1, 2, 3, 4, 5, 6]) === [3, 4];
// middle([1, 2, 3]) === [2];
// middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) === [8, 9];

module.exports = middle;
