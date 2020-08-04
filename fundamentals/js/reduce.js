'use strict';

const numbers = [10, 20, 30, 40, 55, 74];

const total = numbers.reduce(function (accumulator, number, index, array) {
  console.log(accumulator);
  console.log(number);
  console.log(index);
  console.log(array);
}, 0);
