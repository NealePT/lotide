const assertEqual = require("./assertEqual");

const countLetters = function(string) {
  const results = {};
  for (const letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Neale Taylor"));