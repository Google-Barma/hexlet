'use strict';

function uppercaseFirstLatter(string) {
  return string
    .split(' ')
    .map(word => {
      if (word !== '') {
        return word[0].toUpperCase() + word.split('').splice(1).join('');
      }
    })
    .join(' ');
}

// const str = ' many different words inside sentence';
// console.log(str.split(' '));

console.log(uppercaseFirstLatter('hello, word!'));
console.log(uppercaseFirstLatter(' many different words  inside sentence'));
console.log(uppercaseFirstLatter('  hello,   world!'));
console.log(uppercaseFirstLatter(' many different words inside sentence'));
