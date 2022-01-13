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



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results3 = map(words, word => `${word} is a song lyric`);
const results2 = map(words, word => word.length);
const results1 = map(words, word => word[0]);

console.log(results3);

// assertArraysEqual(words, results1);