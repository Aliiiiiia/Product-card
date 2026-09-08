//Уровень 1.
//2;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = numbers.filter((num) => num >= 5);

console.log(newArray);
//3;
const kitchenAppliances = [
  "тостер",
  "блендер",
  "микроволновка",
  "чайник",
  "миксер",
];
const searchItem = "чайник";
const hasItem = kitchenAppliances.includes(searchItem);

if (hasItem) {
  console.log(`Да, ${searchItem} есть в списке!`);
} else {
  console.log(`Нет, ${searchItem} отсутствует в списке.`);
}
//4;
function reverseArray(array) {
  return array.reverse();
}

const array1 = [1, 2, 3, 4, 5];
const array2 = ["тостер", "блендер", "микроволновка"];

reverseArray(array1);
reverseArray(array2);

console.log(array1);
console.log(array2);

//Уровень 2.
import { comments } from "./comments.js";

//7;
const comEmails = comments.filter((comment) => comment.email.includes(".com"));
console.log("7. Почты с .com:", comEmails);

//8;
const updatedComments = comments.map((comment) => ({
  ...comment,
  postId: comment.id <= 5 ? 2 : 1,
}));

console.log(updatedComments);

// 9;
const idAndName = comments.map((comment) => {
  return {
    id: comment.id,
    name: comment.name,
  };
});

console.log(idAndName);

//10;
const checkedComments = comments.map((comment) => {
  return {
    ...comment, // Копируем все старые свойства объекта
    isInvalid: comment.body.length > 180, // true, если длина больше 180, иначе false
  };
});

console.log(checkedComments);

// Уровень 3.
//11;
const emailsViaReduce = comments.reduce((accumulator, comment) => {
  accumulator.push(comment.email);
  return accumulator;
}, []);
console.log(emailsViaReduce);
//12;
const emailsViaMap = comments.map((comment) => comment.email);
console.log(emailsViaMap);
const emailStringToString = emailsViaMap.toString();
const emailStringJoin = emailsViaMap.join(", ");
console.log("12. toString():", emailStringToString);
console.log("12. join():", emailStringJoin);
