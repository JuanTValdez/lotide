const assertEqual = function (actual, expected) {
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

assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
middle([1, 2, 3, 4, 5]) === [3];
middle([1, 2, 3, 4, 5, 6]) === [3, 4];
middle([1, 2, 3]) === [2];
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]) === [8, 9];
