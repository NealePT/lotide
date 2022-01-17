const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :   console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;

const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
assertObjectsEqual(obj1, obj2);