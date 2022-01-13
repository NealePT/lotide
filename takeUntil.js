const eqArrays = function(array1, array2) {
  if (array1 === array2) return true;
  if (array1 === null || array2 === null) return false;
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log((`✅✅✅Assertion Passed: ${array1} === ${array2}`));
  } else if (eqArrays(array1, array2) === false) {
    console.log((`❌❌❌Assertion Failed: ${array1} !== ${array2}`));
  }
};

const takeUntil = function(array, callback) {
  // Need to loop through array until the callback returns a truthy value.
  // Splice ocne it gets to that point (Create a results array so the oringinal is unaffected)
  let results = [];
  for (let item = 0; item < array.length; item++) {
    results.push(array[item]);
    if (callback(array[item])) {
      results.splice(item);
      return results;
    }
  }
};

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