'use strict';

/* console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.guess').value); */

let score = 20;
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const scoreContent = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const highScore = document.querySelector('.highscore');
let secretNumber = caclRandom();
// According to Jonas, I could also do - Math.trunc(Math.random() * 20) + 1;

// number.textContent = secretNumber;

checkBtn.addEventListener('click', clickBtnFn);
againBtn.addEventListener('click', reset);

function clickBtnFn() {
  let guess = Number(document.querySelector('.guess').value);

  if (guess === 0) {
    message.textContent = '⛔ Empty Input - Retry!';
    console.log(`The input value is empty`);
  } else if (guess === secretNumber) {
    message.textContent = '🎊 Correct Number';

    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    number.textContent = secretNumber;

    if (score > highScore.textContent) {
      highScore.textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      scoreContent.textContent = score;
    } else {
      message.textContent = '💥 You lost the game';
    }
  }
}

function reset() {
  score = 20;
  secretNumber = caclRandom();
  document.body.style.backgroundColor = '#222';
  number.style.width = '15rem';

  message.textContent = 'Start guessing...';
  number.textContent = '?';
  scoreContent.textContent = score;
  document.querySelector('.guess').value = '';
}

function caclRandom() {
  return Math.trunc(Math.random() * (20 - 1) + 1);
}
