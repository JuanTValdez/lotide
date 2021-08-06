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

const sentence = "lighthouse in the house";

const countLetter = function (string) {
  const results = {};

  for (const letter of string) {
    // if a Key exist in results
    if (results[letter]) {
      results[letter] += 1;
    }
    // create key if it doesnt exist
    else {
      results[letter] = 1;
    }
  }
  console.log(results);
  return results;
};

countLetter(sentence);
