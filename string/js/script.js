"use strict";

//возвращает строку наоборот
const reverse = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }

  return reverseStr;
};

console.log(reverse("Привет вельвет!"));
