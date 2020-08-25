'use strict'

var life = '';
var parentElementQuiz = document.getElementById('clickable');
var parentElementRiddle = document.getElementById('riddle');
var parentElementLife = document.getElementById('life');
var parentElementPlayerName = document.getElementById('playerName');
var allCluesArray = [];

function Clues (clue){
  this.clue = clue;
  allCluesArray.push(this);
}

new Clues ('I have many feet but, i cannot stand. I cannot sit but, I can lean. What am I?');
new Clues ('I have hands that say hi but nobody waves back. I die when I am not needed. what am I?');
new Clues ('I am a foot long and am slippery. what am I?');

function checkLocalStorageForName() {
  var playerName = localStorage.getItem('playerName');
  var parseName = JSON.parse(playerName);
  var renderName = document.createElement('h2');
  renderName.textContent = parseName;
  console.log(parseName);
  parentElementPlayerName.appendChild(renderName);
}
checkLocalStorageForName();

function checkLocalStorageForLife() {
  if (localStorage.getItem('life') === null) {
    life = 5
  } else {
    var getLifeValue = localStorage.getItem('life');
    var parseLife = JSON.parse(getLifeValue);
    life = parseLife;
  }
}
checkLocalStorageForLife();

function renderLife(life) {
  if (life <= 0) {
    parentElementQuiz.removeEventListener('click', click);
    parentElementLife.innerHTML = '';
    var maxLife = document.createElement('p');
    maxLife.textContent = life;
    parentElementLife.appendChild(maxLife);
    alert('you are dead, Game Over');
  } else {
    parentElementLife.innerHTML = '';
    var maxLife = document.createElement('p');
    maxLife.textContent = 'Life: ' + life + '/5';
    parentElementLife.appendChild(maxLife);
  }
}
// quistion 1
renderLife(life);
var clueText = document.createElement('p');
clueText.textContent = allCluesArray[0].clue;
parentElementRiddle.appendChild(clueText);
parentElementQuiz.addEventListener('click', click)
function click(event) {
  var item = event.target.id;
  if (item === 'broom') {
    parentElementQuiz.removeEventListener('click', click);
    alert('correct');
    quizTwo();
  } else {
    life--;
    renderLife(life);
    if (life > 0){
    alert('wrong, try again')
    }
  }
<<<<<<< HEAD
}
// question 2
function quizTwo() {
  parentElementRiddle.innerHTML = '';
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[1].clue;
  parentElementRiddle.appendChild(clueText);
  parentElementQuiz.addEventListener('click', click)
  function click(event) {
    var item = event.target.id;
    if (item === 'fan') {
      parentElementQuiz.removeEventListener('click', click);
      alert('correct');
      quizThree();
    } else {
      life--;
      renderLife(life)
      alert('wrong, try again')
    }
  }
}
// question 3
function quizThree() {
  parentElementRiddle.innerHTML = '';
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[2].clue;
  parentElementRiddle.appendChild(clueText);
  parentElementQuiz.addEventListener('click', click)
  function click(event) {
    var item = event.target.id;
    if (item === 'slippers') {
      parentElementQuiz.removeEventListener('click', click);
      alert('correct');
      var jsonLife = JSON.stringify(life);
      localStorage.setItem('life', jsonLife);
      window.location.href = 'roomonevictory.html';
    } else {
      life--;
      renderLife(life)
      alert('wrong, try again')
    }
  }
}
=======
}
>>>>>>> ed687a3c9f702cf284208a0d01d4053f4ba18f33
