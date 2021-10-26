const head = function(array) {
  return array[0];
}
// FUNCTION IMPLEMENTATION
const assertEqual = function(firstArray, element) {
  if (firstArray === element) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${element}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} === ${element}`);
  }
};


assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hjello");