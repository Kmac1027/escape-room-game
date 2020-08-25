'use strict'

var life = '';
var parentElementQuizOne = document.getElementById('clickable')
var parentElementRiddle = document.getElementById('riddle')

function checkLocalStorageForName() {
  var playerName = localStorage.getItem('playerName')
  var parseName = JSON.parse(playerName)

}
function checkLocalStorageForLife() {
  if (localStorage.getItems('life') === null) {
    life = 10
  } else {
    var getLifeValue = localStorage.getItem('life');
    var parseLife = JSON.parse(getLifeValue);
    life = parseLife;
  }
}
// var jsonLife = JSON.stringify(life);
// localStorage.setItems('life', jsonLife);
if (life === 9) {

}
function quizeOne(){
  parentElementQuizOne.addEventListener('click', click)
  function click(event) {
    var item = event.target.id;
    if (item === 'broom') {
      parentElementQuizOne.removeEventListener('click', click);
      alert('correct');
      quizTwo();
    } else {
      life--;
      alert('wrong, try again')
    }
  }
}
function quizTwo(){
  parentElementQuizOne.addEventListener('click', click)
  function click(event) {
    var item = event.target.id;
    if (item === 'fan') {
      parentElementQuizOne.removeEventListener('click', click);
      alert('correct');
      quizThree();
    } else {
      life--;
      alert('wrong, try again')
    }
  }
}
function quizThree(){
  parentElementQuizOne.addEventListener('click', click)
  function click(event) {
    var item = event.target.id;
    if (item === 'slippers') {
      parentElementQuizOne.removeEventListener('click', click);
      alert('correct');
    } else {
      life--;
      alert('wrong, try again')
    }
  }
}
quizeOne();