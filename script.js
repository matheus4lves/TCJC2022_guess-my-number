// DOM manipulation
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");
const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const guess = document.querySelector(".guess");

let randomNumber;
let scoreValue;
let highscoreValue = 0;

highscore.textContent = highscoreValue;

// Functionality definition
const generateRandomNumber = () => Math.floor(Math.random() * 20 + 1);

const startNewGame = () => {
  randomNumber = generateRandomNumber();
  scoreValue = 20;
  number.textContent = "?";
  message.textContent = "Start guessing ...";
  score.textContent = scoreValue;
  highscore.textContent = highscoreValue;
  document.body.style.backgroundColor = "#222";
  guess.value = "";
};

const handleWrongGuess = text => {
  scoreValue--;
  message.textContent = text;
  score.textContent = scoreValue;
};

// Event handling
btnCheck.addEventListener("click", function () {
  const guessedNumber = Number(guess.value);

  if (guessedNumber === randomNumber) {
    if (scoreValue > highscoreValue) {
      highscoreValue = scoreValue;
    }

    number.textContent = randomNumber;
    message.textContent = "🎉 Correct number!";
    score.textContent = scoreValue;
    highscore.textContent = highscoreValue;
    document.body.style.backgroundColor = "#60b347";
  } else if (guessedNumber < randomNumber) {
    handleWrongGuess("📉 Too low!");
  } else {
    handleWrongGuess("📈 Too high!");
  }
});

btnAgain.addEventListener("click", startNewGame);

startNewGame();
