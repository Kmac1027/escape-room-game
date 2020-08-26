'use strict';

var life = '';
var timeOut = '';
var parentElementQuiz = document.getElementById('clickable');
var parentElementRiddle = document.getElementById('riddle');
var parentElementLife = document.getElementById('life');
var parentElementPlayerName = document.getElementById('playerName');
var allCluesArray = [];
var lifeImages = ['../img/play-health-stat-dead.png', '../img/play-health-stat-1.png', '../img/play-health-stat-2.png', '../img/play-health-stat-3.png', '../img/play-health-stat-4.png', '../img/play-health-stat-5.png',];



function Clues(clue) {
  this.clue = clue;
  allCluesArray.push(this);
}

new Clues('Your first riddle is: I have many feet, but I cannot stand. I cannot sit, but I can lean.');
new Clues('Your second riddle is: I have hands that say "hi," but nobody waves back. I die when I am not needed.');
new Clues('Your third riddle is: I am a foot long and am slippery.');

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
    life = 5;
  } else {
    var getLifeValue = localStorage.getItem('life');
    var parseLife = JSON.parse(getLifeValue);
    life = parseLife;
  }
}
checkLocalStorageForLife();

function renderLife(life) {
  if (life <= 0) {
    wrong();
    parentElementQuiz.removeEventListener('click', click);
    parentElementLife.innerHTML = '';
    var maxLife = document.createElement('p');
    maxLife.textContent = life;
    parentElementLife.appendChild(maxLife);
    var lifeImage = document.createElement('img');
    lifeImage.setAttribute('src', lifeImages[0]);
    lifeImage.setAttribute('id', 'lifeicon');
    parentElementLife.appendChild(lifeImage);
    window.location.href = 'deathscreen.html';
    alert('You are Dead, Game Over');
  } else {
    parentElementLife.innerHTML = '';
    var maxLife = document.createElement('p');
    maxLife.textContent = 'Life: ' + life + '/5';
    parentElementLife.appendChild(maxLife);
    var lifeImage = document.createElement('img');
    lifeImage.setAttribute('src', lifeImages[life]);
    lifeImage.setAttribute('id', 'lifeicon');
    parentElementLife.appendChild(lifeImage);
  }
}
// question 1
renderLife(life);
var clueText = document.createElement('p');
clueText.textContent = allCluesArray[0].clue;
parentElementRiddle.appendChild(clueText);
parentElementQuiz.addEventListener('click', click);
function click(event) {
  var item = event.target.id;
  if (item === 'broom') {
    parentElementQuiz.removeEventListener('click', click);
    right();
    quizTwo();
  } else {
    life--;
    renderLife(life);
    if (life > 0) {
      wrong();
    }
  }
}
// question 2
function quizTwo() {
  parentElementRiddle.innerHTML = '';
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[1].clue;
  parentElementRiddle.appendChild(clueText);
  parentElementQuiz.addEventListener('click', click);
  function click(event) {
    var item = event.target.id;
    if (item === 'fan') {
      parentElementQuiz.removeEventListener('click', click);
      right();
      quizThree();
    } else {
      life--;
      renderLife(life);
      if (life > 0) {
        wrong();
      }
    }
  }
}
// question 3
function quizThree() {
  parentElementRiddle.innerHTML = '';
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[2].clue;
  parentElementRiddle.appendChild(clueText);
  parentElementQuiz.addEventListener('click', click);
  function click(event) {
    var item = event.target.id;
    if (item === 'slippers') {
      parentElementQuiz.removeEventListener('click', click);
      right();
      var jsonLife = JSON.stringify(life);
      localStorage.setItem('life', jsonLife);
      window.location.href = 'roomonevictory.html';
    } else {
      life--;
      renderLife(life);
      if (life > 0) {
        wrong();
      }
    }
  }
}

function wrong() {
  var parentElementWrong = document.getElementById('answer');
  var wrongImg = document.createElement('img');
  wrongImg.setAttribute('src', '../img/red-check.png');
  parentElementWrong.appendChild(wrongImg);
  timeOut = setTimeout(clearX, 1000);
  function clearX() {
    parentElementWrong.innerHTML = '';
  }
}
function right() {
  var parentElementAnswer = document.getElementById('answer');
  var rightImg = document.createElement('img');
  rightImg.setAttribute('src', '../img/green-check.png');
  parentElementAnswer.appendChild(rightImg);
  timeOut = setTimeout(clearX, 1000);
  function clearX() {
    parentElementAnswer.innerHTML = '';
  }
}
