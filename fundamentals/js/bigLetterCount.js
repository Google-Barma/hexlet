'use strict';

const length = str => str.length;
const toUpperCase = str => str.toUpperCase();

const bigLettersCount = str => {
  let bigLetterSum = 0;
  for (let i = 0; i < length(str); i++) {
    if (str[i] === toUpperCase(str[i])) {
      bigLetterSum += 1;
    }
  }
  return bigLetterSum;
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  } else if (firstCount === secondCount) {
    return 0;
  }
};

const greaterThan = (first, second) => compare(first, second) === 1;

const lessThan = (first, second) => compare(first, second) === -1;

const isEqual = (first, second) => compare(first, second) === 0;

console.log(greaterThan(' A D ', ' ad sd ')); //true
console.log(greaterThan('AD', 'ad sd')); // true, сравнение на > (больше)
console.log(greaterThan('AD', '   Ad sd')); // false, сравнение на > (больше)
console.log(lessThan('ghe df', 'dfwe r D')); // true, сравнение на < (меньше)
console.log(isEqual('liSp', 'lisP')); // true

// console.log(bigLettersCount('ghe df'));
// console.log(bigLettersCount('dfwe r D'));

// console.log(compare('ghe df', 'dfwe r D'));
// console.log(lessThan('ghe df', 'dfwe r D'));
// console.log(isEqual('ghe df', 'dfwe r D'));
