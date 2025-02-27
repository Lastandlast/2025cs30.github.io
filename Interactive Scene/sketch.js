// Interactive Scene
// Mason
// 25/02/2025

let x, y; //character position
let currentBack = 0; //background color variable
function setup() {
  createCanvas(950, windowHeight);
  x = 0; //character x position
  y = 250;
}

function draw() {
  setbackground(); //background color
  SUN(); //sun
  HILL(); //hill
  RIVER(); //river
  Name(); //name
  translate(x, y);
  Character();
}

function setbackground() {
  // Change background based on currentBack state
  if (currentBack === 0) {
    background(135, 206, 235);
  } else if (currentBack === 1) {
    background(25, 25, 112);
  } else if (currentBack === 2) {
    background(255, 140, 0);
  } else if (currentBack === 3) {
    background(169, 169, 169);
  }
}

function keyPressed() {
  // Move character based on arrow key pressed
  if (keyCode === LEFT_ARROW) {
    x -= 40;
  } else if (keyCode === RIGHT_ARROW) {
    x += 40;
  }
}

function mousePressed() {
  // Change background based on middle mouse button pressed
  if (mouseButton === CENTER) {
    currentBack++;
    if (currentBack > 3) {
      currentBack = 0;
    }
  }
}

function RIVER() {
  //Draws the river
  fill(18, 82, 140);
  noStroke();
  rect(0, 500, windowWidth, windowHeight / 2);
}
function HILL() {
  //Draws the hills
  fill(133, 108, 9);
  noStroke();
  triangle(-100, windowHeight / 2 + 50, 600, windowHeight / 2 + 50, 200, 75);
  triangle(300, windowHeight / 2 + 50, 1100, windowHeight / 2 + 50, 800, 75);
}
function SUN() {
  //Draws the sun
  fill(255, 204, 51);
  noStroke();
  circle(470, 330, 150);
}

function Character() {
  //Draws the character
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(0, 3, 105);
  //Legs
  ellipse(510, 530, 15, 30);
  ellipse(490, 530, 15, 30);
  //Body
  circle(500, 500, 50);
  circle(500, 510, 15);
  circle(500, 510, 2);
  circle(490, 495, 2);
  circle(510, 495, 2);
}

function Name() {
  //Displays name
  fill(255);
  textSize(30);
  text("Mason", 800, 950);
}
