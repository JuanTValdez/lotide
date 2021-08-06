const assertArraysEqual = function (actual, expected) {
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

const phrase = "lighthouse in the house";

const letterPositions = function (sentence) {
  const results = {};

  // for (const letter of phrase) {
  //   // if a Key exist in results
  //   if (results[letter]) {
  //     position = phrase.indexOf(letter);

  //     results[letter].push(position);
  //   } else if (!results[letter] && letter != " ") {
  //     let array = new Array();
  //     position = phrase.indexOf(letter);
  //     array.push(position);
  //     results[letter] = array;
  //   }
  // }

  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]] && sentence[i] != " ") {
      results[sentence[i]].push(i);
    } else if (!results[i] && sentence[i] != " ") {
      let array = new Array();
      position = phrase.indexOf(sentence[i]);
      array.push(position);
      results[sentence[i]] = array;
    }
  }
  console.log(results);
  return results;
};

letterPositions(phrase);
