const log = console.log;
const qSel = selector => document.querySelector(selector);

const getById = id => document.getElementById(id);

const getByClass = clasName => document.getElementsByClassName(clasName);

const qSelAll = selector => document.querySelectorAll(selector);

let secretWords2 = ['bool', 'teach', 'js', 'java', 'sql'];
let secretWords = ['bool', 'teach', 'js'];

let printedText = getById('scrtWord');
let score = getById('score');
let restart = getById('restart');
let indexer = 0;
let point = 0;
let pendingGameClasses = getById('pendingGame').classList;
let gameOverTagClasses = getById('gameOver').classList;
let victoryTagClasses = getById('victoryGame').classList;

const showGameOver = () => {
  if (pendingGameClasses.contains('show')) {
    pendingGameClasses.remove('show');
    pendingGameClasses.add('hide');

    sgameOverTagClasses.remove('hide');
    gameOverTagClasses.add('show');

    restart.classList.remove('hide');
    restart.classList.add('show');
  }
};

showVictory = () => {
  if (pendingGameClasses.contains('show')) {
    pendingGameClasses.remove('show');
    pendingGameClasses.add('hide');

    document.querySelector('body').classList.remove('bg-light');
    document.querySelector('body').classList.add('bg-success');

    restart.classList.remove('hide');
    restart.classList.add('show');

    victoryTagClasses.remove('hide');
    victoryTagClasses.add('show');
  }
};

const victoryGame = () => {
  point += 10; //10
  indexer++; //1
  score.innerHTML = point.toString();
  if (!secretWords.length) {
    if (point > 0) showVictory();
    else showGameOver();
  }
};

const removeWordFromArray = removedWord => {
  let index = secretWords.indexOf(removedWord);
  secretWords.splice(index, 1);
};

const requiredInputText = e => {
  if (!printedText.value) {
    getById('checkBtn').setAttribute('disabled', 'disabled');
    return false;
  }
  getById('checkBtn').removeAttribute('disabled', 'disabled');

  if (e.key == 'Enter') {
    checkTextFromInput(printedText.value);
    clearInput();
  }
  return true;
};

const gameOver = () => {
  point -= 10;
  score.innerHTML = point.toString();

  if (point < -30 && point >= -60) {
    document.querySelector('body').classList.remove('bg-light');
    document.querySelector('body').classList.add('bg-warning');
  } else if (point < -60) {
    document.querySelector('body').classList.remove('bg-warning');
    document.querySelector('body').classList.add('bg-danger');
    showGameOver();
  }
};

const checkTextFromInput = function (text) {
  let wordFromSecretWord = '';
  let stop = true;

  secretWords.forEach(word => {
    if (word.toLowerCase() == text.toLowerCase()) {
      wordFromSecretWord = word;
      stop = false;
      return;
    }
  });

  if (!stop) {
    removeWordFromArray(wordFromSecretWord);
    victoryGame();
    return;
  }

  gameOver();
};

const clearInput = () => {
  printedText.value = '';
  requiredInputText();
};

const findSecretWord = () => {
  getById('checkBtn').addEventListener('click', () => {
    checkTextFromInput(printedText.value);
    clearInput();
  });
};

requiredInputText();
printedText.addEventListener('keyup', requiredInputText);
findSecretWord();

restart.addEventListener('click', () => {
  window.location.reload();
});
