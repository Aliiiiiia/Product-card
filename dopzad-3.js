// 1
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => {
  console.log(fruit);
});
// 2
const numbers = [2, 4, 6, 8];
numbers.forEach((number) => {
  console.log(number * 2);
});
// 3
const names = ["Amina", "Dana", "Aruzhan"];
names.forEach((name) => {
  console.log("Привет, ${name}");
});
// 4
const colors = ["red", "green", "blue"];
colors.forEach((color, index) => {
  console.log(`${index} ${color}`);
});
// 5
const numbers1 = [10, 20, 30, 40, 50];
numbers1.forEach((number, index) => {
  if (index < 3) {
    console.log(number);
  }
});
// 6
const ages = [15, 18, 20, 16, 30];
ages.forEach((age) => {
  if (age >= 18) {
    console.log("${age} Совершеннолетний");
  } else {
    console.log("${age} Несовершеннолетний");
  }
});
// 7
const products = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];
products.forEach((product) => {
  console.log(`${product.name} — ${product.price}`);
});
// 8
products.forEach((product) => {
  if (product.price > 100000) {
    console.log(product.name);
  }
});
// 9
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 10
for (let i = 1; i < 6; i++) {
  console.log(i);
}
// 11
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
// 12
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
// 13
const fruits1 = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// 14
const colors1 = ["red", "green", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("${i}: ${color[i]}");
}
// 15
const numbers2 = [10, 20, 30, 40];
let total = 0;
for (let i = 0; i < numbers2.length; i++) {
  total += numbers2[i];
}
console.log(total);
// 16
const numbers3 = [3, 15, 7, 20, 25, 2];
let count = 0;
for (let i = 0; i < numbers3.length; i++) {
  if (numbers3[i] > 10) {
    count++;
  }
}
console.log(count);
// 17
const products1 = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];
for (const product of products1) {
  if (product.isAvailable) {
    console.log(product.name);
  }
}
// 18
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  cards[i].classList.add("active");
  console.log(cards);
}
// 19
// a) forEach (Код получается коротким)
// б) for (здесь можно перебрать через один, контролируя индекс)
// в) for (так же нужно взаимодейсьвовать с индексом)
// г) forEach (простой способ перебрать и добавить к каждому элементу)
// д) for (можно использовать break для выхода из цикла)
// 20
const numbers4 = [1, 2, 3];
for (let i = 0; i < numbers4.length; i++) {
  console.log(numbers[i]);
}
// 21
const fruits2 = ["apple", "banana", "orange"];
fruits2.forEach((fruit) => {
  console.log(fruit);
});
// 22
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// 23
let ii = 1;
while (ii < 6) {
  console.log(ii);
  ii++;
}
// 24
let iii = 5;
while (iii >= 1) {
  console.log(iii);
  iii--;
}
// 25
let count1 = 0;
while (count1 < 5) {
  console.log(count1);
  count1++; // Увеличивает count на 1 на каждом шаге
}
// 27
if (true) {
  const name = "Amina";
}
console.log(name); //Этот код вызовет ошибку, т.к. const name внутри if
// 28
const city = "Astana";
if (true) {
  console.log(city);
}
// Ошибки не будет.
// 29
let score = 10;
if (true) {
  let score = 20;
}
console.log(score); // 10
// 30
let score1 = 10;
if (true) {
  score1 = 20;
}
console.log(score1); // 20
// 31
for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i); // 0,1,2 ошибка
// 32 когда создаем переменную внутри блока -она работает только внутри этого блока
// а когда в блоке мы изменяем внешнюю переменную-это будет работать
// 33
const message = "Outside";
if (true) {
  const message = "Inside";
  console.log(message);
}
console.log(message); //Inside,Outside
// 34
const numbers5 = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);
// 35
const users = [
  { name: "Amina", age: 20 },
  { name: "Dana", age: 25 },
  { name: "Aruzhan", age: 19 },
];
const userNames = users.map((user) => user.name);
console.log(userNames);
// 36
const products2 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
];
const productLabels = products.map(
  (product) => `${product.name} - ${product.price}`,
);

console.log(productLabels);
// 37
const numbers6 = [5, 10, 15];
const squaredNumbers = numbers6.map((num) => num + 10);
console.log(squaredNumbers);
// 38
const numbers7 = [1, 2, 3];
const result = numbers7.map((number) => {
  number * 2;
});
console.log(result); //Ошибка заключается в том, что внутри фигурных скобок цикла map отсутствует ключевое слово return.
// 39
const numbers8 = [5, 10, 15, 20, 3];
const filteredNumbers = numbers8.filter((number) => number > 10);
console.log(filteredNumbers);
// 40
const users1 = [
  { name: "Amina", age: 17 },
  { name: "Dana", age: 25 },
  { name: "Ali", age: 16 },
  { name: "Aruzhan", age: 20 },
];
const adults = users1.filter((user) => user.age >= 18);
console.log(adults);
// 41
const products3 = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];
const availableProducts = products3.filter((product) => product.isAvailable);
console.log(availableProducts);
// 42
const products4 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];
const expensiveProducts = products4.filter((product) => product.price > 100000);
console.log(expensiveProducts);
// 43 с map легче всего перебрать массив и сделать с каждым элементом что-то,
// сразу создавая новый массив, а фильтр перебирает и оставляет отфильтрованное по каким-то параметрам
// 44
const numbers9 = [5, 10, 15, 20, 25];
const numbers10 = numbers9.filter((num) => {
  return num > 10;
});
const numbers11 = numbers10.map((num) => num * 2);

console.log(numbers11);
// 45
const products5 = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];
const availableProductNames = products5
  .filter((product) => product.isAvailable)
  .map((product) => product.name);
console.log(availableProductNames);
// 46
const users2 = [
  { name: "Amina", age: 17 },
  { name: "Dana", age: 25 },
  { name: "Ali", age: 16 },
  { name: "Aruzhan", age: 20 },
];
const adultNames = users2
  .filter((user) => user.age >= 18)
  .map((user) => user.name);
console.log(adultNames);
// 47
const numbers12 = [1, 2, 3];
numbers12.forEach((number) => {
  console.log(number); //ошибка в окончании S
});
// 48
const numbers13 = [1, 2, 3];
const result1 = numbers13.map((number) => {
  return number * 2;
});
console.log(result1);
// 49
for (let i = 0; i < 3; i++) {
  const message = "Hello";
}
console.log(message); // ошибка, так как const должен быть выше, не в { }
// 50  i < numbers.length
// 51 бесконечный цикл, нужно добавить счетчик i++
// 52
const products6 = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
];
const result2 = products6.filter((product) => {
  return product.isAvailable;
});
console.log(result2);
// 53
const products7 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];
products7.forEach((product) => {
  console.log(product.name);
});
for (let i = 0; i < products7.length; i++) {
  console.log(`${i}: ${products7[i].name}`);
}
const availableProducts1 = products7.filter((product) => product.isAvailable);
console.log(availableProducts1);

const expensiveProducts1 = products7.filter(
  (product) => product.price > 100000,
);
console.log(expensiveProducts1);

const productNames = products7.map((product) => product.name);
console.log(productNames);

const availableProductNames1 = products7
  .filter((product) => product.isAvailable)
  .map((product) => product.name);
console.log(availableProductNames1);
