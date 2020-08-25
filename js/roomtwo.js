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