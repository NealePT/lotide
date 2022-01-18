# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @neale/lotide`

**Require it:**

`const _ = require('@neale/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function that asserts if two arrays are equal
* `assertEqual`: function that asserts if two given values are equal
* `assertObjectsEqual`: function that asserts if two objects are equal
* `countLetters`: function that returns a count of each letter in a string
* `countOnly`: function that returns a count of a specified item 
* `eqArrays`: function that checks if two arrays are equal
* `eqObjects`: function that checks if two objects are equal
* `findKey`: function that scans an object and returns a key for which the given value is truthy
* `findKeyByValue`: function that searches for a key in an object that corresponds to the given value
* `flatten`: function that removes arrays within arrays and returns one array
* `head`: function that returns the first element in an array
* `index`: list of all the functions in lotide
* `letterPositions`: function that returns the positions of each letter in a string 
* `map`: function that creates a new array with the results of calling a provided function on every element in the called array 
* `middle`: function that returns the middle element(s) of an array 
* `tail`: function that returns every element except for the first in an array 
* `takeUntil`: function that iterates through an array until a given value is seen
* `without`: function that removes elements from an array 