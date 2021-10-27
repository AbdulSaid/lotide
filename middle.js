const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length){
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  // if the arrays executed in eqArrays function come back as true, then it would use the Passed console.log
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    // Otherwise, it will say fail
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  // Assign variable to store what the middle value of the array is
  const middleValue = []
  // if statements to determine the length of arrays
  if ((array.length === 1) || (array.length === 2)) {
    console.log(middleValue);
    return middleValue
  } else if (array.length % 2 === 1) {
    // if the array is odd numbers
    var middle = array[Math.floor(array.length / 2)];
    middleValue.push(middle)
    return middleValue
  } else if (array.length % 2 === 0) {
    // if the array is even numbers
    let firstMiddle = array[Math.floor((array.length - 1) / 2)];
    let secondMiddle = array[Math.floor((array.length + 1) / 2)];
    middleValue.push(firstMiddle)
    middleValue.push(secondMiddle)
    return middleValue
  }
  console.log("array of middle",middleValue);
  return middleValue
}

// middle([1, 2]) 
middle([1, 2, 3, 4, 5]) 
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3])