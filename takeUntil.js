const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");


const takeUntil = function(array, callback) {
  let results = [];
  for (let item = 0; item < array.length; item++) {
    results.push(array[item]);
    if (callback(array[item])) {
      results.splice(item);
      return results;
    }
  }
};

module.exports = takeUntil;

// Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// Expected Output
let expected1 = [ 1, 2, 5, 7, 2 ];
let expected2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];

// Equal arrays assertions
assertArraysEqual(results1, expected1);
assertArraysEqual(results2, expected2);

// Making sure the original data is unaffected
console.log(data1);
console.log(data2);