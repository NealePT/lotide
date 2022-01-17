const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


let tail = function(array) {
  let tailArr = [];
  for (let i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  }
  return tailArr;
};

module.exports = tail;