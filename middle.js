const middle = function(array) {
  let mid = Math.floor(array.length / 2);
  let newArr = [];
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    newArr.push(array[mid - 1]);
    newArr.push(array[mid]);
    return newArr;
  } else {
    newArr.push(array[mid]);
    return newArr;
  }
};

module.exports = middle;
