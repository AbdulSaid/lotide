const assertArraysEqual = function(actual, expected) {
  // if the arrays executed in eqArrays function come back as true, then it would use the Passed console.log
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  === ${expected}`);
    // Otherwise, it will say fail
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(array,object) {
  
}