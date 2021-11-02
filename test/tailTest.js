const tail = require('../tail');
const assertEqual = require('../assertEqual');
const { assert } = require('chai');


const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2));

assertEqual(result[0],"Lighthouse");
assertEqual(result[1],"Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

describe("#tail",() => {
  it("should return the length of the array", () => {
    assert.deepEqual(tail(["Hello","Lighthouse", "Labs"]),["Lighthouse","Labs"])
  })
})