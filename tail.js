const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};
// FUNCTION IMPLEMENTATION
const assertEqual = function(array, expected) {
  if (array === expected) {
    console.log(`✅✅✅ Assertion Passed: ${array} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array} === ${expected}`);
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2));
assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);