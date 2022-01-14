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


const flatten = function(array) {
  let flat = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const item of array[i]) {
        flat.push(item);
      }
    } else flat.push(array[i]);
  }
  return flat;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);