const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  // ...

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

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc);
// assertObjectsEqual(eqObjects(cd, dc), true);
