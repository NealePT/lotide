const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(array1, array2) {
  if (array1 === array2) return true;
  if (array1 == null || array2 == null) return false;
  if (array1.length !== array2.length) return false;
  for (var i = 0; i < array1.length; ++i) {
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
}


// const assertArraysEqual = function(array1, array2) {
//   if (array1 === array2) {
//     console.log((`✅✅✅Assertion Passed: ${array1} === ${array2}`));
//   }
//   if (array1 == null || array2 == null) {
//     console.log((`❌❌❌Assertion Failed: ${array1} !== ${array2}`));
//   }
//   if (array1.length !== array2.length) {
//     console.log((`❌❌❌Assertion Failed: ${array1} !== ${array2}`));
//   }
//   for (var i = 0; i < array1.length; ++i) {
//     if (array1[i] !== array2[i]) {
//       console.log((`❌❌❌Assertion Failed: ${array1} !== ${array2}`));
//     } 
//   }
//   console.log((`✅✅✅Assertion Passed: ${array1} === ${array2}`));
// };



assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], []);