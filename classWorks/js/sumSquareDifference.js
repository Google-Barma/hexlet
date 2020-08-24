'use strict';

function sumSquareDifference(number) {
  let sumSquare = 0;
  let squareSum = 0;

  for (let i = 1; i <= number; i++) {
    sumSquare += i ** 2;
    squareSum += i;
  }
  return squareSum ** 2 - sumSquare;
}

console.log(sumSquareDifference(10));

// Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

// Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.
