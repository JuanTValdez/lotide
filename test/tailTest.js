const assertEqual = require("../assertEqual");
const tail = require("../tail");
// const tail = require("../tail.js");

assertEqual(tail([1, 2, 3, 4, 5]), 4);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), 2);
