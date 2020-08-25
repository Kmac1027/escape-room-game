'use strict';

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

new Clues ('Your first riddle is: I am a necessity to some and a treasure to many.');
new Clues ('Your next clue is: I am full of light but always in shade.');
new Clues ('WRITE A THIRD CLUE');

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


//quiz 1
renderLife(life);
var clueText = document.createElement('p');
clueText.textContent = allCluesArray[0].clue;
parentElementRiddle.appendChild(clueText);
parentElementQuiz.addEventListener('click', click)
function click(event) {
  var item = event.target.id;
  if (item === 'mug') {
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
}
function quizTwo() {
  parentElementRiddle.innerHTML = '';
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[1].clue;
  parentElementRiddle.appendChild(clueText);
  parentElementQuiz.addEventListener('click', click)
  function click(event) {
    var item = event.target.id;
    if (item === 'lamp') {
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
function quizThree() {
  parentElementRiddle.innerHTML = '';
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[2].clue;
  parentElementRiddle.appendChild(clueText);
  parentElementQuiz.addEventListener('click', click)
  function click(event) {
    var item = event.target.id;
    if (item === 'game') {
      parentElementQuiz.removeEventListener('click', click);
      alert('correct');
      var jsonLife = JSON.stringify(life);
      localStorage.setItem('life', jsonLife);
      window.location.href = 'roomthreevictory.html';
    } else {
      life--;
      renderLife(life)
      alert('wrong, try again')
    }
  }
}