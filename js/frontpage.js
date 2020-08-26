'use strict'
localStorage.clear();
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
  a.href = "./pages/firstroom.html";
  form.appendChild(a);
  form.removeEventListener('submit', submit );
  var parentElement = document.getElementById('directions');
  var directions = document.createElement('p');
  directions.innerHTML="Welcome to my escape room. You will be challenged to solve a series of riddles in order to escape. The answer to each riddle will be an object in the room. Select the object to answer the riddle. You must escape three rooms with three riddles each. If you fail to solve the riddles, you will be stuck in my escape room for all eternity. Each time you guess incorrectly, I will take a limb from you. You only have 5.. Do not lose them all";
 parentElement.appendChild(directions);  
 var audio = new Audio('../audio/homepage.mp3');
 audio.play();
  
}
var audio = new Audio('../audio/field.mp3');
 audio.play();
