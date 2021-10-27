const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const newObject = {}
  for (let x = 0; x < sentence.length; x++) {
    if (newObject.hasOwnProperty(sentence[x])) {
      newObject[sentence[x]] += 1;
    } else {
      newObject[sentence[x]] = 1;
    }
  }
  return newObject;
}

console.log(countLetters("ffries"));