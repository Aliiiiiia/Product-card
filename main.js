// Покраска всех карточек

const productCards = document.querySelectorAll('.card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card-button');
const lightblueColorHash = '#ADD8E6';
const blueColorHash = '#7c7cea';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = lightblueColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.card');
const changeFirstCardColorButton = document.querySelector('#change-first-card-color-button');

changeFirstCardColorButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть google

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle) 

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('https://www.google.com');
  } else {
  return;
  }  
}

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(messege) {
  alert(messege)
  console.log(messege) 
}
