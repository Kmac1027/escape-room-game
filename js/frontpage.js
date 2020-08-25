'use strict'
var form = document.getElementById('playerName')

form.addEventListener('submit', submit)

function submit(event) {
  event.preventDefault();
  var playerName = event.target.playername.value;
  var jsonPlayerName = JSON.stringify(playerName);
  localStorage.setItem('playerName', jsonPlayerName);
  var a = document.createElement('a')
  var link = document.createTextNode('Click Here to Enter');
  a.appendChild(link);
  a.title = "link to first room";
  a.href = "../pages/firstroom.html";
  form.appendChild(a);
  form.removeEventListender('submit', submit );
}