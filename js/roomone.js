'use strict'

var life = '';
var parentElementQuizOne = document.getElementById('')
var parentElementQuizTwo = document.getElementById('')
var parentElementQuizThree = document.getElementById('')

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

parentElementQuizOne.addEventListener('click', quizOne)

function quizOne(event) {
  alt = event.target.alt;
  if (alt === '') {
    parentElementQuizOne.removeEventListener
    alert('correct')
  } else {
    life--;
  }

}