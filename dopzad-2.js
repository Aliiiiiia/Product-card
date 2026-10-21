// 1
const user0 = {
  name: "Aliya",
  age: 39,
  city: "Kazan",
};
// 2
const product0 = {
  name: "Laptop",
  price: 5000,
  isAvailable: true,
};
// 3-7
const user = {
  name2: "Amina",
  age: 20,
  city: "Astana",
};

const user2 = user;
user.age = 21;

const user3 = {
  ...user,
  isStudent: true,
  country: "Kazakhstan",
};
console.log(user3.name2, user3.age, user3.isStudent, user3.country);
// 8-10
const product = {
  name: "Phone",
  price: 300000,
  color: "black",
};
const product2 = product;
product.price = 250000;
delete product.color;

console.log(product2.price);
// 11
const student = {
  name3: "Dana",
  score: 80,
};
if (student.score >= 60) {
  console.log("Зачет");
} else {
  console.log("Незачет");
}
// 12
const user4 = {
  name: "Aruzhan",
  age: 17,
};
if (user4.age >= 18) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}
// 13
const book = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
};
console.log(book.title);
console.log(book.author);
console.log(book.pages);
// 14
const car = {
  brand: "Toyota",
  year: 2020,
};
const car2 = car;
car.year = 2022;
const car3 = {
  ...car,
  color: "white",
};
console.log(car3.brand, car3.year, car3.color);
// 15
//const products = ["Chocolate", "Sushi", "Tom Yum"];

// 16
//const numbers = [10, 20, 30, 40];

// 17
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
// 18
console.log(fruits[1]);
// 19
console.log(fruits[2]);
// 20
const colors = ["red", "green", "blue"];
console.log(colors[1]); // green
// 21
const numbers = [5, 10, 15];
console.log(numbers.length); // элементов в массиве 3
// 22-26
const animals = ["cat", "dog", "rabbit"];
const index = animals.indexOf("dog");
if (index !== -1) {
  animals[index] = "fox";
  animals.push("horse");
  animals.pop();
  animals.unshift("lion");
  animals.shift();
}
console.log(animals);
// 27
const users = [
  { name: "Aliya", age: 39 },
  { name: "Amina", age: 20 },
  { name: "Dana", age: 25 },
];
// 28
console.log(users[0].name);
// 29
console.log(users[1].age);
// 30
const products = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Tablet", price: 200000 },
];
console.log(products[2].name);
// 31
console.log(products[1].price);
// 32
products[0].price = 250000;
console.log(products[0].price);
// 33
const fruits1 = ["apple", "banana", "orange"];
fruits1.forEach((fruit) => console.log(fruit));
// 34
const numbers1 = [1, 2, 3, 4, 5];
numbers1.forEach((number) => console.log(number));
// 35
const names = ["Amina", "Dana", "Aruzhan"];
names.forEach((name) => {
  console.log("Привет, ${name}");
});
// 36
const numbers2 = [2, 4, 6];
numbers2.forEach((number) => {
  console.log(number * 2);
});
// 37
const colors1 = ["red", "green", "blue"];
colors1.forEach((color2, index) => {
  console.log(`${index} ${color2}`);
});
// 38
const numbers3 = [10, 20, 30, 40];
numbers3.forEach((number, index) => {
  if (index < 2) {
    console.log(number);
  }
});
// 39-40
const products1 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Tablet", price: 200000 },
];
products1.forEach((product) => {
  console.log(`${product.name} — ${product.price}`);
});
// 41
const numbers4 = [1, 5, 10, 15, 20];
numbers.forEach((number) => {
  if (number > 10) {
    console.log(number);
  }
});
// 42
const ages = [15, 18, 20, 16, 30];
ages.forEach((age) => {
  if (age >= 18) {
    console.log("${age}: Совершеннолетний");
  } else {
    console.log("${age}: Несовершеннолетний");
  }
});
// 43
const products2 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];
products2.forEach((product) => {
  if (product.price > 100000) {
    console.log(`${product.name} — ${product.price}`);
  }
});
// 44
const cards = ["card1", "card2", "card3", "card4"];
cards.forEach((card, index) => {
  if (index === 0 || index === 1) {
    console.log(`${card} — Первая группа`);
  } else {
    console.log(`${card} — Вторая группа`);
  }
});
// 45
function sayHello() {
  console.log("Hello");
}
sayHello();
// 46
function showName(name) {
  console.log(name);
}

showName("Алия");
// 47
function sum(a, b) {
  return a + b;
}
const results = sum(3, 7);
console.log(results);
// 48
function multiply(a, b) {
  return a * b;
}
const result = multiply(7, 3);
console.log(result);
// 49
function checkAge(age) {
  if (age >= 18) {
    console.log("Можно войти");
  } else {
    console.log("Нельзя войти");
  }
}
checkAge(20);
// 50
function greet(name) {
  console.log(`Привет, ${name}`);
}
greet("Dana");
greet("Amina");
greet("Aruzhan");
// 51-52
const numbers5 = [1, 2, 3];
function showNumber(number) {
  console.log(`Число: ${number}`);
}
numbers5.forEach(showNumber);
// 53
const names1 = ["Amina", "Dana", "Aruzhan"];
function greet1(name) {
  console.log(`Привет, ${name}!`);
}
names1.forEach(greet1);
// 54
//В 1-м мы вызвали саму функцию, а во 2-м ошибка.
// 55
const title = document.getElementById("title");
// 56
const button = document.getElementById("button");
// 57
const text = document.querySelector(".text");
// 58
const card1 = document.querySelector("card1");
// 59
const cards2 = document.querySelectorAll(".card");
// 60
const text1 = document.getElementsByClassName("text");
// 61
const title1 = document.querySelector("#title");
// 62
const button1 = document.querySelector("#button");
// 63
const titleById = document.getElementById("main-title");
console.log(titleById);
const titleByQuery = document.querySelector("#main-title");
console.log(titleByQuery);
// 64
// getElementById - ищет только id
// querySelector - ищет всё Class, id, тег
// 65
// вернёт только первую карточку из пяти
// 66
//document.querySelectorAll('.card').
// 67
// querySelector - ищет первое совпадение
// querySelectorAll - ищет все совподения
// 68
// все 3 div
// 69
const cards5 = document.querySelectorAll(".card");

cards.forEach((card) => {
  console.log(card);
});
// 70
//console.log(card.textContent);
// 71
//card.classList.add("active");
// 72
const cards6 = [1, 2, 3, 4, 5];
cards6.forEach((card, index) => {
  if (index <= 2) {
    console.log("${card} first");
  } else {
    console.log("${card} second");
  }
});
// 73
const cards7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
cards7.forEach((card, index) => {
  if (index <= 4) {
    console.log(`${card} first`);
  } else {
    console.log(`${card} second`);
  }
});
// 74
// пропущена запятая между свойствами объекта.
// 75
// нумерация элементов массива всегда начинается с нуля, в задании массив в коде указано 3, хотя массивов всего 2.
// 76
// undefined. Свойство city отсутствует.
// 77
// внутри console.log выводится весь массив целиком (numbers), а не его текущий элемент (number).
// 78
// в использовании метода querySelector вместо querySelectorAll.
// 79
// нужно изменить метод querySelector на querySelectorAll.
// 80
// oшибка в использовании знака решётки (#) внутри метода.
// 81
// если класс то в методе querySelector пропущена точка (.) перед названием класса.
// 82
// ошибки нет,код находит все карточки на странице и делит их на две группы, в зависимости от их индекса.
// 83
const products3 = document.querySelectorAll(".product");
products3.forEach((product, index) => {
  console.log(product.textContent);
  if (index < 2) {
    product.classList.add("product--first");
  } else {
    product.classList.add("product--second");
  }
});
// 84
const products4 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];
products4.forEach((product) => {
  console.log(product.name, product.price);
  if (product.price > 100000) {
    console.log("Дорогой товар");
  } else {
    console.log("Бюджетный товар");
  }
});
