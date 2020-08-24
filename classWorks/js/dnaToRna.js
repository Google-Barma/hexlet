'use strict';

function dnaToRna(string) {
  const dnaTable = {
    A: 'U',
    C: 'G',
    G: 'C',
    T: 'A',
  };

  return string
    .split('')
    .map(char => dnaTable[char])
    .join('');
}

console.log(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
console.log(dnaToRna('CCGTA')); // 'GGCAU'
console.log(dnaToRna('')); // ''
console.log(dnaToRna('ACNTG')); // null
