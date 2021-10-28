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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  // return all the indices (zero-based positions) in the string where each character is found
  // for each letter, instead of returning just one number, 
   for (let i = 0; i < sentence.length; i++) {
     const letter = sentence[i]
     if (results[letter]){
       results[letter].push(i)
     } else {
       results[letter] = [i];
     }
   }
 
  
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);