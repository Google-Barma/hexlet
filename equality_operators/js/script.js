'use strict';

// let company = prompt('Какая компания создала JavaScript?', '');

// company == 'Netscape' ? alert('Верно!') : alert('Неправильно.');

// const questionMessage = prompt('Какое официальное название JavaScript?');
// if (questionMessage === 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// const num = prompt('Введите число');
// if (num > 0) {
//   alert(1);
// } else if (num < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result;

// result = a + b < 4 ? 'мало' : 'много';
const login = prompt('Введите логин');
let message;
message =
  login === 'Сотрудник'
    ? 'Привет'
    : login === 'Директор'
    ? 'Здравствуйте'
    : login === ''
    ? 'Нет логина'
    : '';

alert(message);
