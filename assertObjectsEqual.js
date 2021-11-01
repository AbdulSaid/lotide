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
const eqObjects = function (object1, object2) {
  //compare lengths
  console.log("object one", object1);
  console.log("object 2", object2);
  let objectOneKeys = Object.keys(object1);
  let objectTwoKeys = Object.keys(object2);
  console.log("object one keys", objectOneKeys);
  console.log("object 2 keys", objectTwoKeys);

  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }
  for (let key of objectOneKeys) {
    console.log(`object1['${key}'] = ${object1[key]}`);
    if (  Array.isArray(object1[key])  &&  Array.isArray(object2[key])  ) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        console.log("not equal");
        return false;
      }
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(`44Example label: ${inspect(actual)}`);
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)}  === ${expected}`);
    // Otherwise, it will say fail
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(actual)} !== ${expected}`);
  }
};

const ab = { a: "1", b: "2"};
const ba = { b: "2", a: "1"};
console.log(assertObjectsEqual(eqObjects(ab,ba),true));


