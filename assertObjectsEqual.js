const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

function eqArrays(array1, array2) {
  if (array1 === array2) return true;
  if (array1 == null || array2 == null) return false;
  if (array1.length !== array2.length) return false;
  for (var i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  if (obj1.length === obj2.length) {
    for (const i of obj1) {
      if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
        if (eqArrays(obj1[i], obj2[i]) !== true) {
          return false;
        }
      }
      else if (obj1[i] === obj2[i]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  eqObjects(actual, expected) ? console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) :   console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
assertObjectsEqual(obj1, obj2)