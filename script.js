// Selecting variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// initialize the game state
activePlayer = 0;
currentScore = 0;
scores = [0, 0];
playing = true;
winningScore = 10;
// function to switch between players
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
    player1El.classList.add('player--active');
    player0El.classList.remove('player--active');
  } else {
    activePlayer = 0;
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
  }
  currentScore = 0;
  current1El.innerHTML = currentScore;
  current0El.innerHTML = currentScore;
}

// Click on Roll Dice
btnRoll.onclick = () => {
  // Roll dice
  const randomNumber = Math.trunc(Math.floor(Math.random() * 6) + 1);
  diceEl.src = `http://127.0.0.1:5500/dice-${randomNumber}.png`;
  // Add to Current Score
  randomNumber === 1 ? switchPlayer() : (currentScore += randomNumber);
  activePlayer === 0
    ? (current0El.innerHTML = currentScore)
    : (current1El.innerHTML = currentScore);
};
// Click on Hold Btn
btnHold.onclick = () => {
  const currentPlayer = document.querySelector(`.player--${activePlayer}`);
  scores[activePlayer] += currentScore;
  score0El.innerHTML = scores[0];
  score1El.innerHTML = scores[1];

  if (scores[activePlayer] < winningScore) {
  } else {
    currentPlayer.classList.add('player--winner');
    playing = false;
    switchPlayer();
  }
};
