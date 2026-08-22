function showWeather(city, temperature) {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`,
  );
}

showWeather("Москве", -15);

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(1000);
checkSpeed(300000000);
checkSpeed(299792458);

const productName = "Смартфон";
const productPrice = 500;

// Функция для попытки покупки товара
function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    // Считаем, сколько именно денег не хватает
    const missingAmount = productPrice - budget;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс`);
  }
}

buyProduct(600); // Выведет: Смартфон приобретён. Спасибо за покупку!
buyProduct(300); // Выведет: Вам не хватает 200$, пополните баланс

function showWeather(city, temperature) {
  console.log(
    `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`,
  );
}

showWeather("Казани", "+15");
showWeather("Мекке", "+37");
showWeather("Медине", "+39");
