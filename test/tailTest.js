const tail = require("../tail");
const assertEqual = require("../assertEqual");

console.log(tail([5,6,7]));
console.log(tail(["Hello", "Lighthouse", "Labs"]));
console.log(tail([]));
console.log(tail([1]));

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
