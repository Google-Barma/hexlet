'use strict';

const addDigits = num => {
  let arrNum;

  arrNum = num
    .toString()
    .split('')
    .reduce((acc, number) => acc + +number, 0);

  return arrNum.toString().length > 1 ? addDigits(arrNum) : arrNum;
};

console.log(addDigits(10)); // 1
console.log(addDigits(19)); // 1
console.log(addDigits(38)); // 2
console.log(addDigits(1259)); // 8
console.log(addDigits(38)); //2
console.log(addDigits(598997686567)); //4
