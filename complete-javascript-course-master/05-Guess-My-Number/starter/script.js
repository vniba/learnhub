'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number 💫';

document.querySelector('.number').textContent = 18;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 19;
console.log(document.querySelector('.guess').value);
 */
// secret number
let secretNum = Math.round(Math.random() * 19) + 1;
console.log(secretNum);

// score
let scoreUp = 20;
let highScore = 0;

// display in html
const displayMessage = (value, message) => {
  document.querySelector(value).textContent = message;
};

// receiving input from user and show message
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log('guess', guess);

  // logic

  // when input falsy value
  if (!guess) {
    displayMessage('.message', 'No number 🛑');
  }
  // when player wins
  else if (guess === secretNum) {
    displayMessage('.message', 'Correct Number 🥳');
    displayMessage('.number', secretNum);
    displayMessage('.score', scoreUp);
    // change background
    document.querySelector('body').style.backgroundColor = 'green';
    // change width of number bg
    document.querySelector('.number').style.width = '20rem';
    // highscore
    if (scoreUp > highScore) {
      highScore = scoreUp;
      displayMessage('.highscore', highScore);
    }
    // guess wrong
  } else if (guess !== secretNum) {
    if (scoreUp > 1) {
      displayMessage(
        '.message',
        guess > secretNum ? 'Too high 😀' : 'Too low 😁'
      );
      scoreUp--;
      displayMessage('.score', scoreUp);
    } else {
      displayMessage('.message', 'You lost the game 💣');
      displayMessage('.score', 0);
    }
  }
  // // when guess is too high
  // else if (guess > secretNum) {
  //   if (scoreUp > 1) {
  //     document.querySelector('.message').textContent = 'Too high 😬';
  //     scoreUp--;
  //     document.querySelector('.score').textContent = scoreUp;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 💣';
  //   }
  // }
  // // when guess is too low
  // else if (guess < secretNum) {
  //   if (scoreUp > 1) {
  //     document.querySelector('.message').textContent = 'Too low 😁';
  //     scoreUp--;
  //     document.querySelector('.score').textContent = scoreUp;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game 💣';
  //   }
  // }
});

// again button (reset)
document.querySelector('.again').addEventListener('click', () => {
  secretNum = Math.round(Math.random() * 20);
  console.log('sn', secretNum);
  scoreUp = 20;
  displayMessage('.score', scoreUp);
  displayMessage('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('.message', 'Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
