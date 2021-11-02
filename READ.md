# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @abdulsaid/lotide`

**Require it:**

`const _ = require('@abdulsaid/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function1(head)`: Will take the first(head) number in a array and give you the result.
* `function2(tail)`: Will give you every number after the first number in an array(tail).
* `function3(middle)`: Will give you the middle number of an array. If the array is less than 2, will return a empty array. If the array is odd will return one middle number. If the array is even, will return 2 middle numbers.

head,   
  tail, 
  middle, 