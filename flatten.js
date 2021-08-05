const assertArraysEqual = function (actual, expected) {
  if (String(actual) === String(expected)) {
    console.log(
      "👽👽👽 Assertion Passed: " + `${actual}` + " === " + `${expected}`
    );
  } else if (String(actual) !== String(expected)) {
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

const flatten = function (array) {
  let newArray = [];
  newArray = array.flat();

  console.log(newArray);
  return newArray;
};

// console.log(Array.isArray(array3));
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// flatten([1, 2, [3, 4], 5, [6]]);
