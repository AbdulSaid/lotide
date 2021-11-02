const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');


// Test value
middle([1, 2, 3, 4, 5]); 
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])