const eqArrays = function (array1, array2) {
  if (String(array1) === String(array2)) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
};

module.exports = eqArrays;
