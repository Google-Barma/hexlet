'use strict';

function invertCase(string) {
  return string
    .split('')
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase(),
    )
    .join('');
}

console.log(invertCase('Hello, World!')); // hELLO, wORLD!
console.log(invertCase('I loVe JS')); // i LOvE js
