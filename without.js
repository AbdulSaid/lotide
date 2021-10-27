const eqArrays = function(array1, array2) {
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const without = function(array,itemsToRemove) {
  // Initialize new array
  const newArray = []
  // For loop to go through array
  for (let x = 0; x < array.length; x++) {
    // If statement that checks if itemsToRemove is the same as array[x]
    if (array[x] === itemsToRemove[x]) {
    // if the items are the same, I don't want it to do anything
    } else {
    // If they are different, I want to push it to the newArray  
      newArray.push(array[x]) 
    }
  }
  console.log(newArray)
}

  
/* Implement assertArraysEqual which will take in two arrays and console.log an appropriate message
to the console */
const assertArraysEqual = function(actual, expected) {
  // if the arrays executed in eqArrays function come back as true, then it would use the Passed console.log
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual}  === ${expected}`);
    // Otherwise, it will say fail
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// without([1, 2, 3], [1])
without(["1", "2", "3"], [1, 2, "3"]) 