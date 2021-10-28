const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence) {
  const newObject = {}
  const newSentence= sentence.replace(/ /g,'')
  // loop over the letter of the word
  for (let i = 0; i < newSentence.length; i++) {
    const letter = newSentence[i]
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