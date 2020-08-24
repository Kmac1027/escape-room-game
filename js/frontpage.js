'use strict'
var form = document.getElementById('playerName')

form.addEventListener('submit', function (event) {
  event.preventDefault();
  var playerName = event.target.playername.value;
  var jsonPlayerName = JSON.stringify(playerName);
  localStorage.setItem('playerName', jsonPlayerName);
})