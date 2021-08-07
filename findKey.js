const { setUncaughtExceptionCaptureCallback } = require("process");

const findKey = function (object, callback) {
  let listOfKeys = Object.keys(object);

  for (key of listOfKeys) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

const results = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

console.log(results);
