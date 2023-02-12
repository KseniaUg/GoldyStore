const hoursValue = document.querySelector('.js-product-sale-hours');
const hoursText = document.querySelector('.js-product-sale-hours-text');
const minutesValue = document.querySelector('.js-product-sale-minutes');
const minutesText = document.querySelector('.js-product-sale-minutes-text');
const secondsValue = document.querySelector('.js-product-sale-seconds');
const secondsText = document.querySelector('.js-product-sale-seconds-text');

const HOURS = 12;
const MINUTES = 46;
const SECONDS = 51;

export default function countdown() {
  let targetTime =
    Number(hoursValue.textContent) * 60 * 60 +
    Number(minutesValue.textContent) * 60 +
    Number(secondsValue.textContent);

  let timer = setInterval(() => {
    targetTime--;

    showTime(targetTime);
    if (targetTime <= 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function showTime(timeInMs) {
  const hours = Math.floor((timeInMs / (60 * 60)) % 24);
  const minutes = Math.floor((timeInMs / 60) % 60);
  const seconds = Math.floor(timeInMs % 60);

  hoursValue.textContent = hours < 10 ? '0' + hours : hours;
  minutesValue.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsValue.textContent = seconds < 10 ? '0' + seconds : seconds;

  hoursText.textContent = declensionNum(hours, ['час', 'часа', 'часов']);
  minutesText.textContent = declensionNum(minutes, [
    'минута',
    'минуты',
    'минут',
  ]);
  secondsText.textContent = declensionNum(seconds, [
    'секунда',
    'секунды',
    'секунд',
  ]);
}

function declensionNum(num, words) {
  return words[
    num % 100 > 4 && num % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
  ];
}
