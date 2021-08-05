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

const countOnly = function (firstNames, itemsToCount) {
  var count = 0;
  firstNames.forEach((item) => item === itemsToCount);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

countOnly(
  [45, 67, 8, 23, 67, 29, 31, 67, 45],

  {
    45: true,
    67: true,
    8: false,
    23: false,
    29: true,
    31: true,
  }
);
