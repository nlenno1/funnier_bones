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
 