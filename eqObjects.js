"use strict";
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let x = 0; x < array1.length; x++) {
    if (array1[x] !== array2[x]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };

// console.log(assertEqual(eqObjects(ab, ba), true));
// console.log(assertEqual(eqObjects(ab,abc),false));
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(assertEqual(eqObjects(cd, dc), true));
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd,cd2),false));
