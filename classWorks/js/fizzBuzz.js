'use strict';

function fizzBuzz(begin, end) {
  while (begin <= end) {
    begin % 3 === 0 && begin % 5 === 0
      ? console.log('FizzBazz')
      : begin % 3 === 0
      ? console.log('Fizz')
      : begin % 5 === 0
      ? console.log('Buzz')
      : console.log(begin);
    begin += 1;
  }
}

// function fizzBuzz(begin, end) {
//   if (begin > end) return;
//   begin % 3 === 0 && begin % 5 === 0
//     ? console.log('FizzBazz')
//     : begin % 3 === 0
//     ? console.log('Fizz')
//     : begin % 5 === 0
//     ? console.log('Buzz')
//     : console.log(begin);
//   return fizzBuzz(begin + 1, end);
// }

fizzBuzz(11, 20);
// fizzBuzz(1, 100);
