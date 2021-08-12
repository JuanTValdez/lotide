const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

assertArraysEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 4]), true);
