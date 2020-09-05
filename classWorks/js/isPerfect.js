'use strict';

function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return num === sum;
}

console.log(isPerfect(6));
console.log(isPerfect(8));
console.log(isPerfect(28));
console.log(isPerfect(20));
console.log(isPerfect(496));
