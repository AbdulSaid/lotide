const assertEqual = require('./assertEqual');

const head = function(array) {
  return array[0];
}
// FUNCTION IMPLEMENTATION



assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hjello");