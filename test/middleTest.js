const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const { assert } = require('chai')


// Test value
// middle([1, 2, 3, 4, 5]); 
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])

describe("#middle", () => {
  it("should give middle value", () => {
    const array = [1, 2, 3, 4, 5];
    assert.deepEqual(middle(array),[3]);
  })
})