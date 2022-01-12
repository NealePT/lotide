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

// Need source array and itemstoremove array 
// Use loop to inspect every item 
// Likely have to splice out that item at the index in which it's found 

const without = function(source, itemsToRemove) {
//   let newArray = source.slice()
//   for (let i = 0; i < newArray.length; i++) {
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (newArray[i] === itemsToRemove[j]) {
//         newArray.splice(i, 1)
//       } 
//     }
//   }
//   return newArray;
// };
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    } 
  }
  return newArray;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
