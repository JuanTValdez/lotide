const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(
      "👽👽👽 Assertion Passed: " + `${actual}` + " === " + `${expected}`
    );
  } else if (actual != expected) {
    console.log(
      "👽👽👽 Assertion Failed: " + `${actual}` + " !== " + `${expected}`
    );
  }
};

const eqObjects = function (object1, object2) {
  let object1Length = Object.keys(object1).length;
  let object2Length = Object.keys(object2).length;

  if (object1Length != object2Length) {
    console.log("Objects are not same length");
    return;
  }

  if (String(object1) === String(object2)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };

assertEqual(eqObjects(ab, abc), undefined);
