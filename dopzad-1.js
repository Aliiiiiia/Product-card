// 1-6
const name = "Aliya";
const age = 39;
const city = "Kazan";
const isStudent = true;
const price = 5000;

const name2 = "Amina"; // Amina

console.log(name);
console.log(age);
console.log(city);
console.log(isStudent);
console.log(price);
console.log(name2);

// 7
let score = 10;
score = 15; // 15

console.log(score);

// 8
let count = 5;
count = count + 2; //7

console.log(count);

// 9
const age2 = 20;
let score2 = 0;
const siteName = "Shop";
let count2 = 1;

console.log(age2);
console.log(score2);
console.log(siteName);
console.log(count2);

// 10
//const age3 = 20; // ошибка, так как age3 объявлена как const и не может быть изменена, если переменная меняется, то нужно использовать let
//age3 = 21;
//console.log(age3); // Error: Assignment to constant variable.
let age3 = 20;
age3 = 21;
console.log(age3);

//11
const userName = "Amina"; //правильно будет написать без пробела и с заглавной Name

// 12
const name3 = "Amina"; // нельзя ставить цифру в начале переменной.

// 13
const name4 = "Amina"; // тип данных строка string

// 14
const age4 = 20; // тип данных число number

// 15
const isOnline = true; // тип данных логический boolean

// 16
const price2 = "5000"; // тип данных строка string.

// 17
const value = false; // тип данных логический boolean

// 18
let value1; // тип данных undefined

// 19
5 > 3; // true

// 20
2 > 10; // false

// 21
10 === 10; // true

// 22
10 === 5; // false

// 23
20 >= 18; // true

// 24
17 >= 18; // false

// 25
5 !== 10; // true

// 26
const age5 = "20";
console.log(age5 === 20); // false, так как age5 это строка, а 20 это число.

// 27
const age6 = 20;

if (age6 >= 18) {
  console.log("Можно"); // выводит "Можно", так как age6 больше или равно 18
}

// 28
const age7 = 15;

if (age7 >= 18) {
  console.log("Можно"); // не выводит ничего, так как age7 меньше 18
}

// 29
const age8 = 16;

if (age8 >= 18) {
  console.log("Вход разрешён");
} else {
  console.log("Вход запрещён"); // выводит "Вход запрещён", так как age8 меньше 18
}

// 30
const temperature = 30;

if (temperature > 25) {
  console.log("Жарко");
} else {
  console.log("Не жарко");
}

// 31
const age9 = 19;

if (age9 >= 18) {
  console.log("Совершеннолетний");
} else {
  console.log("Несовершеннолетний");
}

// 32
const score3 = 80;

if (score3 >= 60) {
  console.log("Зачет");
} else {
  console.log("Не зачет");
}

// 33
const password = "12345";

if (password === "12345") {
  console.log("Добро пожаловать");
} else {
  console.log("Неверный пароль");
}

// 34
const isOnline1 = true;

if (isOnline1) {
  console.log("Пользователь онлайн"); // выводит "Пользователь онлайн", так как isOnline1 равно true
} else {
  console.log("Пользователь офлайн");
}

// 35
const hasTicket = false;

if (hasTicket) {
  console.log("Можно войти");
} else {
  console.log("Билета нет"); // выводит "Билета нет", так как hasTicket равно false
}

// 36
const age10 = 15;

if (age10 >= 18) {
  console.log("Можно войти");
} else {
  console.log("Нельзя войти"); // выводит "Нельзя войти", так как age10 меньше 18
}

// 37
const age11 = 18;

if (age11 >= 18) {
  console.log("Можно");
}

// 38
const age12 = 18;

if (age12 === 18) {
  console.log("Возраст 18");
}

// 39
let number = 5;
number = number + 2;

if (number > 6) {
  console.log("A");
} else {
  console.log("B"); // выводит "A", так как number равно 7, что больше 6
}

// 40
let score4 = 10;
score4 = score4 + 5;

if (score4 >= 15) {
  console.log("Успех"); // выводит "Успех", так как score4 равно 15, что больше или равно 15
} else {
  console.log("Попробуй ещё");
}

// 41
const price3 = 1000;

if (price3 > 500) {
  console.log("Дорого"); // выводит "Дорого", так как price3 больше 500
} else {
  console.log("Недорого");
}

// 42
const userAge = "18";

if (userAge === 18) {
  console.log("Возраст подходит");
} else {
  console.log("Возраст не подходит"); // выводит "Возраст не подходит", так как userAge это строка, а 18 это число
}

// 43
let num = 5;

if (num > 0) {
  console.log("Положительное число");
} else {
  console.log("Не положительное число");
}

// 44
const temperature1 = 30;

if (temperature1 >= 25) {
  console.log("Жарко");
} else {
  console.log("Прохладно");
}

// 45
const score5 = 70;

if (score5 >= 60) {
  console.log("Экзамен сдан");
} else {
  console.log("Экзамен не сдан");
}

// 46
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Добро пожаловать");
} else {
  console.log("Пожалуйста, войдите в аккаунт");
}

// 47
const age13 = 20;

if (age13 >= 18) {
  console.log("Можно войти");
} else {
  console.log("Нельзя войти");
}

// 48
let count3 = 2; //переменная count3 ровна 2
count3 = count3 + 3; // к переменной count3 прибавляем 3

if (count3 >= 5) {
  // если, count3 больше или равно 5
  console.log("A"); // то выводим 'A'
} else {
  // иначе выводим 'B'
  console.log("B");
}

// 49 выведет "Второй", потому что условие спрашивает правда ли что value2 не равна 10
const value2 = 10;

if (value2 !== 10) {
  console.log("Первый");
} else {
  console.log("Второй");
}

// 50
const age14 = 20;

if (age14 >= 18) {
  console.log("Доступ разрешён");
} else {
  console.log("Доступ запрещён");
}
