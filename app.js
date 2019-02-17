let userScore = 0;
let computerScore = 0;

const USER_SCORE_SPAN = document.getElementById('user-scored');
const COMPUTER_SCORE_SPAN = document.getElementById('computer-scored');
const SCORE_BOARD_DIV = document.getElementById('score-board');
const RESULT_DIV = document.getElementById('result');
const ROCK_CHOICE_DIV = document.getElementById('rock');
const PAPER_CHOICE_DIV = document.getElementById('paper');
const SCISSORS_CHOICE_DIV = document.getElementById('scissors');

const getComputerRandomChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomChoiceIndex = Math.floor(Math.random() * 3);
  return choices[randomChoiceIndex];
};

const engine = userChoice => {
  const computerChoice = getComputerRandomChoice();
  const choiceComposite = `user:${userChoice} | comp:${computerChoice}`;
  switch (choiceComposite) {
    case 'user:paper | comp:rock':
    case 'user:rock | comp:scissors':
    case 'user:scissors | comp:paper':
      console.log('user wins');
    case 'user:rock | comp:paper':
    case 'user:scissors | comp:rock':
    case 'user:paper | comp:scissors':
      console.log('comp wins');
  }
};

const main = () => {
  ROCK_CHOICE_DIV.addEventListener('click', () => engine('rock'));
  PAPER_CHOICE_DIV.addEventListener('click', () => engine('paper'));
  SCISSORS_CHOICE_DIV.addEventListener('click', () => engine('scissors'));
};

main();
