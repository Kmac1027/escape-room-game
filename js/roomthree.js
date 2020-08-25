'use strict';

var life = '';
var parentElementQuiz = document.getElementById('clickable');
var parentElementRiddle = document.getElementById('riddle');
var parentElementLife = document.getElementById('life');
var parentElementPlayerName = document.getElementById('playerName');
var allCluesArray = [];
var lifeImages = ['./img/play-health-stat-dead.png', './img/play-health-stat-1.png', './img/play-health-stat-2.png', './img/play-health-stat-3.png', './img/play-health-stat-4.png', './img/play-health-stat-5.png'];

function Clues (clue){
  this.clue = clue;
  allCluesArray.push(this);
}

new Clues ('I am a necessity to some and a treasure to many.');
new Clues ('I am always in shade.');
new Clues ('I get fiercely hot. I vary in sizes. Without me, the moon is all we\'ll see. It\'s impossible to walk into a room without at least one of me in them.');

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
    var lifeImage = document.createElement('img')
    lifeImage.setAttribute('src', lifeImages[0]);
    parentElementLife.appendChild(lifeImage);
    alert('you are dead, Game Over');
    window.location.href = 'deathscreen.html';
    
  } else {
    parentElementLife.innerHTML = '';
    var maxLife = document.createElement('p');
    maxLife.textContent = 'Life: ' + life + '/5';
    parentElementLife.appendChild(maxLife);
    var lifeImage = document.createElement('img');
    lifeImage.setAttribute('src', lifeImages[life]);
    parentElementLife.appendChild(lifeImage);
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
    if (item === 'bulb') {
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