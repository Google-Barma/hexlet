'use strict';

const square = a => a * a;

const sumOfSquares = (a, b) => square(a) + square(b);

const squareSumOfSquares = (a, b) => sumOfSquares(a, b) * sumOfSquares(a, b);

// Реализуйте функцию square(), которая возвращает квадрат числа.
// Реализуйте функцию sumOfSquares(), которая возвращает сумму квадратов двух чисел.
// Реализуйте функцию squareSumOfSquares(), которая возвращает квадрат суммы квадратов двух чисел.

console.log(square(5)); // 25
console.log(square(10)); // 100
console.log(sumOfSquares(5, 10)); // 125
console.log(sumOfSquares(10, -9)); // 181
console.log(squareSumOfSquares(1, 1)); // 4
console.log(squareSumOfSquares(2, 3)); // 169
