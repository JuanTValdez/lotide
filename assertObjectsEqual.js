const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // <= add this line
  // ...
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
