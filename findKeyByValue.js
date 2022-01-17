const assertEqual = require("./assertEqual");

const findKeyByValue = function(object, value) {
  let key = Object.keys(object);
  let values = Object.values(object);
  for (let i = 0; i < key.length; i++) {
    if (values[i] === value) {
      return key[i];
    }
  }
};

module.exports = findKeyByValue;


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "sciFi");
