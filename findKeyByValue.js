const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`)
  }
};

const findKeyByValue = function(obj,value) {
  for (let key in obj) {
    // console.log(`key: ${obj[key]}`)
    if (obj[key] === value) {
      console.log(`key in the if statement: ${key}`)
      return key
    }
    // let movieName = obj[key]
    // console.log(`moviename ${movieName}`)
    // console.log(`value ${value}`)
    // if (movieName === value) {

    // }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);