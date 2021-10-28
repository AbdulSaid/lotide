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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  //compare lengths
  
  let objectOneLength = Object.keys(object1)
  let objectTwoLength = Object.keys(object2)

  if (objectOneLength.length === objectTwoLength.length) {
    // for loop of one of the objects
    for (let keys of objectOneLength) {
      if (Array.isArray(objectOneLength[keys]) && Array.isArray(objectTwoLength[key])) {
        if (!eqArrays(objectOneLength[key],objectTwoLength[key])) {
          return false;
        }
      }
    }
    return true
  } 
  return false
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)}  === ${expected}`);
    // Otherwise, it will say fail
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertObjectsEqual(eqObjects(ab,ba),false));


