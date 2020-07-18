"use strict";

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num <= 0) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(21));
console.log(isPrime(7));
console.log(isPrime(3));
console.log(isPrime(35));
console.log(isPrime(2));
console.log(isPrime(10));
