const eqArrays = function(array1,array2) {
  let counter = 0
  for (let x = 0; x < array1.length; x ++) {
      if (array1[x] === array2[x]) {
        counter++
        console.log(`array1: ${array1[x]} \n array2: ${array2[x]}`);
        console.log(counter);
      } else {
        return false
      }
  }
  return true;
}

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`)
  }
};

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
