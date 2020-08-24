'use strict'

var life = '';

function checkLocalStorageForLife(){
  if (localStorage.getItems('life') === null){
    life = 10
  } else {
    var getLifeValue = localStorage.getItem('life');
    var parseLife = JSON.parse(getLifeValue);
    life = parseLife; 
  }
}
// var jsonLife = JSON.stringify(life);
// localStorage.setItems('life', jsonLife);