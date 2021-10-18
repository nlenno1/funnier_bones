// code taken from StackOverflow (https://stackoverflow.com/questions/27368778/how-to-toggle-audio-play-pause-with-one-button-or-link)

var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
};
myAudio.onpause = function() {
  isPlaying = false;
};