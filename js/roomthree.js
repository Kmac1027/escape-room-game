'use strict';

var life = '';
var parentElementQuizOne = document.getElementById('clickable');
var parentElementRiddle = document.getElementById('riddle');
var parentElement = document.getElementById('riddle');
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

}
function checkLocalStorageForLife() {
  if (localStorage.getItems('life') === null) {
    life = 10;
  } else {
    var getLifeValue = localStorage.getItem('life');
    var parseLife = JSON.parse(getLifeValue);
    life = parseLife;
  }
}
// var jsonLife = JSON.stringify(life);
// localStorage.setItems('life', jsonLife);



function quizeOne(){
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[0].clue;
  parentElement.appendChild(clueText);
  parentElementQuizOne.addEventListener('click', click);
  function click(event) {
    var item = event.target.id;
    if (item === 'mug') {
      parentElementQuizOne.removeEventListener('click', click);
      alert('correct');
      quizTwo();
    } else {
      life--;
      alert('wrong, try again');
    }
  }
}

function quizTwo(){
  parentElement.innerHTML = '';
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[1].clue;
  parentElement.appendChild(clueText);
  parentElementQuizOne.addEventListener('click', click);
  function click(event) {
    var item = event.target.id;
    if (item === 'lamp') {
      parentElementQuizOne.removeEventListener('click', click);
      alert('correct');
      quizThree();
    } else {
      life--;
      alert('wrong, try again');
    }
  }
}
function quizThree(){
  parentElement.innerHTML = '';
  var clueText = document.createElement('p');
  clueText.textContent = allCluesArray[2].clue;
  parentElement.appendChild(clueText);
  parentElementQuizOne.addEventListener('click', click);
  function click(event) {
    var item = event.target.id;
    if (item === 'game') {
      parentElementQuizOne.removeEventListener('click', click);
      alert('correct');
    } else {
      life--;
      alert('wrong, try again');
    }
  }
}

function generateRiddle (){
  parentElement.textContent = allClues[0];
}

quizeOne();

