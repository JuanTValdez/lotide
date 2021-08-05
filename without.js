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

const without = function (array, remove) {
  let newArray = [];
  let savedElement;

  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);

    if (array[i] !== remove[0] && array[i] !== remove[1]) {
      savedElement = array[i];
      // array.pop([i])
      newArray.push(savedElement);
    }
  }
  console.log(newArray);
  return newArray;
};

without([1, 2, 5, 3], [2, 3]);
assertArraysEqual(without([1, 2, 5, 3], [2, 3]), [1, 5]);
