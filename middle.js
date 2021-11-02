const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  // Assign variable to store what the middle value of the array is
  const middleValue = [];
  // if statements to determine the length of arrays
  if ((array.length === 1) || (array.length === 2)) {
    return middleValue;
  } else if (array.length % 2 === 1) {
    // if the array is odd numbers
    var middle = array[Math.floor(array.length / 2)];
    middleValue.push(middle);
    return middleValue;
  } else if (array.length % 2 === 0) {
    // if the array is even numbers
    let firstMiddle = array[Math.floor((array.length - 1) / 2)];
    let secondMiddle = array[Math.floor((array.length + 1) / 2)];
    middleValue.push(firstMiddle);
    middleValue.push(secondMiddle);
    return middleValue;
  }
  return middleValue;
}

module.exports = middle;
