const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const newObject = {}
  // loop over the letter of the word
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]
    // if the property isnt in the object, it means its a new letter and we will create the number
    if (!newObject[letter]) {
      newObject[letter] = 1
    } else {
      newObject[letter]++
    }
  }
  return newObject;
}

console.log(countLetters("Light House"));