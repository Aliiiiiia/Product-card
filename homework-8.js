//3.Создание объекта на основе моих данных.
const person = {
  firstName: "Алия",
  lastName: "Алтынбаева",
  email: "a-altyn@list.ru",
  interests: "Фронтенд-разработка, искусственный интеллект",
  jobTitle: "Ученик",
  age: "39",
  country: "Россия",
  city: "Казань",
  relationshipStatus: "замужем",
  children: "4, беременная",
};

console.log(person);

//4.Создание объекта автомобиля и добавление свойства owner
const car = {
  brand: "Tesla",
  model: "Model S",
  year: 2024,
  color: "Черный",
  transmission: "Автомат",
};

car.owner = person;
console.log(car);

// 5.Написать функцию которая аргументом будет принимать объект.
function addMaxSpeed(carObject) {
  if (Object.hasOwn(carObject, "maxSpeed")) {
    return;
  }

  carObject.maxSpeed = 250;
}

addMaxSpeed(car);
console.log(car);

// 6.Функция: вывести значение свойства объекта
function printPropertyValue(obj, propertyName) {
  console.log(obj[propertyName]);
}
printPropertyValue(car, "brand");
printPropertyValue(car, "year");
printPropertyValue(car, "maxSpeed");

// 7.Создать массив, который содержит названия продуктов (просто строки)
const productList = ["Молоко", "Хлеб", "Яблоки", "Сыр", "Курица"];

console.log(productList);

// 8.Создать массив, состоящий из объектов, где объект представляет собой книгу.
const books = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези",
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Серый",
    genre: "Антиутопия",
  },
  {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "Черный",
    genre: "Фэнтези",
  },
];

books.push({
  title: "Мастер и Маргарита",
  author: "Михаил Булгаков",
  year: 1967,
  coverColor: "Синий",
  genre: "Роман",
});

console.log(books);

// 9. Два массива книг (один — вселенная) и объединение через оператор
const harryPotterBooks = [
  {
    title: "Гарри Поттер и философский камень",
    author: "Дж. К. Роулинг",
    year: 1997,
    coverColor: "Красный",
    genre: "Фэнтези",
  },
  {
    title: "1984",
    author: "Джордж Оруэлл",
    year: 1949,
    coverColor: "Серый",
    genre: "Антиутопия",
  },
  {
    title: "Властелин колец",
    author: "Дж. Р. Р. Толкин",
    year: 1954,
    coverColor: "Черный",
    genre: "Фэнтези",
  },
  {
    title: "Мастер и Маргарита",
    author: "Михаил Булгаков",
    year: 1967,
    coverColor: "Синий",
    genre: "Роман",
  },
];

const harryPotterUniverseBooks = [
  {
    title: "Гарри Поттер и Тайная комната",
    author: "Дж. К. Роулинг",
    year: 1998,
    coverColor: "Зеленый",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и узник Азкабана",
    author: "Дж. К. Роулинг",
    year: 1999,
    coverColor: "Фиолетовый",
    genre: "Фэнтези",
  },
  {
    title: "Гарри Поттер и Кубок огня",
    author: "Дж. К. Роулинг",
    year: 2000,
    coverColor: "Кубковый",
    genre: "Фэнтези",
  },
];

const allBooks = [...books, ...harryPotterBooks];
console.log(allBooks);

//10.Добавление нового свойства для объекта "isRare".
const mainLibraryCatalog = [...books, ...harryPotterUniverseBooks];
console.log(mainLibraryCatalog);
function markRareBooks(booksArray) {
  return booksArray.map((book) => {
    const updatedBook = { ...book };
    updatedBook.isRare = book.year > 2000;
    return updatedBook;
  });
}

const rareMarkedBooks = markRareBooks(mainLibraryCatalog);
console.log(rareMarkedBooks);
