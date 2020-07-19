'use strict';

// if (!(age >= 14 && age <= 90))
// if (age < 14 && age > 90)
let userPass;
const userInput = prompt('Введите логин');
if (userInput === 'Админ') {
  userPass = prompt('Введите пароль');
  if (userPass === 'Я главный') {
    alert('Здравствуйте!');
  } else if (userPass === null) {
    alert('Отменено пользователем!');
  } else {
    alert('Не верный пароль!');
  }
} else if (userInput === null) {
  alert('Отменено');
} else {
  alert('Не верный пароль!');
}
