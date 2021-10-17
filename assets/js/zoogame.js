// Main variables

var bigSkeleton = document.querySelector(".big-skeleton");
var map = document.querySelector(".map");
var littleSkeleton = document.querySelector(".little-skeleton");
var dogSkeleton = document.querySelector(".dog-skeleton");
var crocSkeleton = document.querySelector(".croc-skeleton");
var elephantSkeleton = document.querySelector(".elephant-skeleton");
var parrotSkeleton = document.querySelector(".parrot-skeleton");

var x = 0;
var y = 0;

var held_directions = [];
var speed = 1;

// Music

function playSound(sound) {
    var song1 = document.getElementById(sound);
    song1.volume = .25;
    if (song1.paused) {
      song1.play();
      document.getElementById("music-stop").style.visibility = "visible";
    } else {
      song1.pause();
      document.getElementById("music-stop").style.visibility = "hidden";
    }
  }

// Place characters

const placeSkeleton = () => {
    var pixelSize = parseInt(
       getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    const held_direction = held_directions[0];
    if (held_direction) {
       if (held_direction === directions.right) {x += speed;}
       if (held_direction === directions.left) {x -= speed;}
       if (held_direction === directions.down) {y += speed;}
       if (held_direction === directions.up) {y -= speed;}
       bigSkeleton.setAttribute("facing", held_direction);
    }
    bigSkeleton.setAttribute("walking", held_direction ? "true" : "false");
    
    //Limits (gives the illusion of walls)
    var leftLimit = -8;
    var rightLimit = (16 * 11)+8;
    var topLimit = 1;
    var bottomLimit = (16 * 7);
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }
    
    var camera_left = pixelSize * 66;
    var camera_top = pixelSize * 42;
    
    map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    bigSkeleton.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
 }

 const placeLittleSkeleton = () => {
   
    var pixelSize = parseInt(
       getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    
    const held_direction = held_directions[0];
    if (held_direction) {
       if (held_direction === directions.right) {x += speed;}
       if (held_direction === directions.left) {x -= speed;}
       if (held_direction === directions.down) {y += speed;}
       if (held_direction === directions.up) {y -= speed;}
       littleSkeleton.setAttribute("facing", held_direction);
    }
    littleSkeleton.setAttribute("walking", held_direction ? "true" : "false");
    
    //Limits (gives the illusion of walls)
    var leftLimit = -8;
    var rightLimit = (16 * 11)+8;
    var topLimit = -8 + 32;
    var bottomLimit = (16 * 7);
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }
    
    var camera_left = pixelSize * 66;
    var camera_top = pixelSize * 42;
    
    map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    littleSkeleton.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
 }

 const placeDogSkeleton = () => {
   
    var pixelSize = parseInt(
       getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    
    const held_direction = held_directions[0];
    if (held_direction) {
       if (held_direction === directions.right) {x += speed;}
       if (held_direction === directions.left) {x -= speed;}
       if (held_direction === directions.down) {y += speed;}
       if (held_direction === directions.up) {y -= speed;}
       dogSkeleton.setAttribute("facing", held_direction);
    }
    dogSkeleton.setAttribute("walking", held_direction ? "true" : "false");
    
    //Limits (gives the illusion of walls)
    var leftLimit = -8;
    var rightLimit = (16 * 11)+8;
    var topLimit = -8 + 32;
    var bottomLimit = (16 * 7);
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }
    
    var camera_left = pixelSize * 66;
    var camera_top = pixelSize * 42;
    
    map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    dogSkeleton.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
 }
 

 var reset = function () {
	bigSkeleton.x = map.width / 2;
	bigSkeleton.y = map.height / 2;

	// Throw the monster somewhere on the screen randomly
	crocSkeleton.x = 32 + (Math.random() * (map.width - 64));
	crocSkeleton.y = 32 + (Math.random() * (map.height - 64));
};

var update = function (modifier) {
	/*if (38 in held_directions) { // Player holding up
		character.y -= character.speed * modifier;
	}
	if (40 in held_directions) { // Player holding down
		character.y += character.speed * modifier;
	}
	if (37 in held_directions) { // Player holding left: ;
		character.x -= character.speed * modifier;
	}
	if (39 in held_directions) { // Player holding right: ;
		character.x += character.speed * modifier;
	}*/

	// Are they touching?
	if (
		bigSkeleton.x <= (crocSkeleton.x + 32)
		&& crocSkeleton.x <= (bigSkeleton.x + 32)
		&& bigSkeleton.y <= (crocSkeleton.y + 32)
		&& crocSkeleton.y <= (bigSkeleton.y + 32)
	) {
		++monstersCaught;
		reset();
	}
};

 var main = function () {
	var now = Date.now();
	var delta = now - then;
	update(delta / 1000);
    placeSkeleton();
    placeLittleSkeleton();
    placeDogSkeleton();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var then = Date.now();
reset();
main();


/* Direction key state */
const directions = {
    up: "up",
    down: "down",
    left: "left",
    right: "right",
 }
 const keys = {
    38: directions.up,
    37: directions.left,
    39: directions.right,
    40: directions.down,
 }
 document.addEventListener("keydown", (e) => {
    var dir = keys[e.which];
    if (dir && held_directions.indexOf(dir) === -1) {
       held_directions.unshift(dir)
    }
 })
 
 document.addEventListener("keyup", (e) => {
    var dir = keys[e.which];
    var index = held_directions.indexOf(dir);
    if (index > -1) {
       held_directions.splice(index, 1)
    }
 });