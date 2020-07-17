"use strict";

const revers = (str) => {
  let reversStr = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reversStr += str[i];
    console.log(str[i]);
  }

  return reversStr;
};

console.log(revers("Привет вельвет!"));
