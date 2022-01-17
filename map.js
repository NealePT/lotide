const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;


// const results3 = map(words, word => `${word} is a song lyric`);
// const results2 = map(words, word => word.length);
const results1 = map(words, word => word[0]);

console.log(results1);

assertArraysEqual(words, results1);