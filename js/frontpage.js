'use strict';
localStorage.clear();
var form = document.getElementById('playerName');

form.addEventListener('submit', submit);

function submit(event) {
  event.preventDefault();
  var playerName = event.target.playername.value;
  var jsonPlayerName = JSON.stringify(playerName);
  localStorage.setItem('playerName', jsonPlayerName);
  var a = document.createElement('a');
  a.setAttribute('id', 'anchor');
  var link = document.createTextNode('Click Here to Enter');
  a.appendChild(link);
  a.title = 'link to first room';
  a.href = './pages/firstroom.html';
  form.appendChild(a);
  form.removeEventListener('submit', submit );
  var parentElement = document.getElementById('directions');
  var directions = document.createElement('p');
  directions.innerHTML='Welcome to my escape room. You will be challenged to solve a series of riddles in order to escape. The answer to each riddle will be an object in the room. Select the object to answer the riddle. You must escape three rooms with three riddles each. If you fail to solve the riddles, you will be stuck in my escape room for all eternity. Each time you guess incorrectly, I will take a limb from you. You only have 5. Do not lose them all.';
  parentElement.appendChild(directions);
  var audio = new Audio('../audio/homepage.mp3');
  audio.play();

}


// codepen.io
$(function() {
  'use strict';
  var a = 0;
  $('#tv').hide();
  for (; a < 25; a += 1) {
    setTimeout(function b() {
      var a = Math.random() * 1e3 + 5e3,
        c = $('<div />', {
          'class': 'smoke',
          css: {
            left: Math.random() * 800,
            backgroundSize: 'contain',
            width: Math.random() * 800,
            height: Math.random() * 600
          }
        });
      $(c).addClass('animated');
      $(c).addClass('zoomIn');
      $(c).addClass('rollOut');
      $(c).appendTo('#viewport');
      $.when($(c).animate({}, {
        duration: a / 4,
        easing: 'linear',
        queue: false,
        complete: function() {
          $(c).animate({}, {
            duration: a / 3,
            easing: 'linear',
            queue: false
          });
        }
      }),
      $(c).animate({
        bottom: $('#viewport').height()
      }, {
        duration: a,
        easing: 'linear',
        queue: false
      })).then(
        function() {
          $(c).remove();
          b();
        });
    }, 
    Math.random() * 3e3);
  }
  // $('body').keypress(function() {
  //   $('body').addClass('fadeOut');
  //   setTimeout(function() {
  //     $('#tv').show();
  //   }, 1000);

  //   console.log('Handler for .keypress() called.');
  // });
}());
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
  playerDefaults = {
    autoplay: 0,
    autohide: 1,
    modestbranding: 0,
    rel: 0,
    showinfo: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 0,
    iv_load_policy: 3
  };
var vid = [{
    'videoId': '2b5QNj-BVhs',
    'startSeconds': 515,
    'endSeconds': 690,
    'suggestedQuality': 'hd720'
  }, {
    'videoId': '9ge5PzHSS0Y',
    'startSeconds': 465,
    'endSeconds': 657,
    'suggestedQuality': 'hd720'
  }, {
    'videoId': 'OWsCt7B-KWs',
    'startSeconds': 0,
    'endSeconds': 240,
    'suggestedQuality': 'hd720'
  }, {
    'videoId': 'qMR-mPlyduE',
    'startSeconds': 19,
    'endSeconds': 241,
    'suggestedQuality': 'hd720'
  }],
  randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

function onYouTubePlayerAPIReady() {
  tv = new YT.Player('tv', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: playerDefaults
  });
}

function onPlayerReady() {
  tv.loadVideoById(vid[randomvid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1) {
    $('#tv').addClass('active');
  } else if (e.data === 0) {
    tv.seekTo(vid[randomvid].startSeconds);
  }
}

function vidRescale() {

  var w = $(window).width() + 200,
    h = $(window).height() + 200;

  if (w / h > 16 / 9) {
    tv.setSize(w, w / 16 * 9);
    $('.tv .screen').css({
      'left': '0px'
    });
  } else {
    tv.setSize(h / 9 * 16, h);
    $('.tv .screen').css({
      'left': -($('.tv .screen').outerWidth() - w) / 2
    });
  }
}

$(window).on('load resize', function() {
  vidRescale();
});

$('.hi span').on('click', function() {
  $('#tv').toggleClass('mute');
  if ($('#tv').hasClass('mute')) {
    tv.mute();
  } else {
    tv.unMute();
  }
});
// var audio = new Audio('../audio/field.mp3');
// audio.play();
