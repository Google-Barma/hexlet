'use strict';

function isHappyTicket(str) {
  const strArr = str.split('');
  return (
    strArr.slice(0, strArr.length / 2).reduce((acc, num) => {
      return +acc + +num;
    }) ===
    strArr.slice(strArr.length / 2).reduce((acc, num) => {
      return +acc + +num;
    })
  );

  //   return firstNumbersArr === secondNumbersArr;
}

console.log(isHappyTicket('385916')); // true
console.log(isHappyTicket('231002')); // false
console.log(isHappyTicket('1222')); // false
console.log(isHappyTicket('054702')); // true
console.log(isHappyTicket('00')); // true
