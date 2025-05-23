'use strict';

//select element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const cureent1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1El = document.querySelector('.player--1');
const player0El = document.querySelector('.player--0');

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  cureent1El.innerHTML = 0;
  current0El.innerHTML = 0;

  diceEl.classList.add('hidden');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init(); //call function so we can access them all
// switching player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  // swithcing bg color
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
// rolling dice functionality
btnRoll.addEventListener('click', () => {
  if (playing) {
    // 1. generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(dice);

    // 3. check for rolled 1 if true, switch player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  if (playing) {
    // 1. add current score to activeplayer
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check score is >= 100
    if (scores[activePlayer] >= 100) {
      // 3. finish game
      console.log(`winner ${activePlayer}`);
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--winner${activePlayer}`)
        .classList.remove('acitve-player');
    } else {
      // 4. switch player
      switchPlayer();
    }
  }
});

// reset game
btnNew.addEventListener('click', init);
