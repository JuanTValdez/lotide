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

// Passes
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);

// Fails
assertArraysEqual([1, 21, 3, 14], [81, 2, 83, 4]);
