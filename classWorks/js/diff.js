'use strict';

function diff(a, b) {
  return b - a < 360 - b ? b - a : 360 - b;
}

console.log(diff(0, 45)); // не 315, а 45, потому что 45 меньше === 45
console.log(diff(0, 180)); //=== 180
console.log(diff(0, 190)); // не 190, а 170, потому что 170 меньше === 170
console.log(diff(120, 280)); // === 160
