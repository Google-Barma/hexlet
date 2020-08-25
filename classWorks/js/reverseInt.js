'use strict';

function reverseInt(num) {
  if (num.toString().split('')[0] === '-') {
    return '-' + num.toString().split('').splice(1).reverse().join('');
  }
  return num.toString().split('').reverse().join('');
}

console.log(reverseInt(13)); // 31
console.log(reverseInt(-123)); // -321
console.log(reverseInt(8900)); // 98
