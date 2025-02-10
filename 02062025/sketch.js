// coordinate System and User Events
// Mason
// Feb 6th. 2025


function setup() {
  // run one, at the very begining
  createCanvas(500, 500);
}

function draw() {
  // draw loop, repeats over and over forever
  // target of 60 frames per second
  // A new image is drawn at the bottom of the previous image
  background(90);
  fill(0,255,0);
  
  circle(500,500,100);
  fill(255,0,0);
  circle(0,0,100);
  fill(255,0,255);
  circle(0,500,100);
  circle(500,0,100);
  circle(250,250,100);
}

