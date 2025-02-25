// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
let Bcolor;
function setup() {
  createCanvas(1000, windowHeight);
  x = width/2;
  y = 250;
  Bcolor = color(0,0,0);
}

function draw() {
  background(Bcolor);
  SUN();
  HILL();
  RIVER();
  translate(x, y);
  Character();
}

function keyPressed(){
  if (keyCode === LEFT_ARROW){
    x -= 40;
  } else if (keyCode === RIGHT_ARROW) {
    x += 40;
  }
}

function mousePressed(){
  if(mouseButton === CENTER){
    Bcolor = color(random(255), random(255), random(255));
  }
}


function RIVER() {
  fill(18, 82, 140);
  noStroke();
  rect(0, 500, windowWidth, windowHeight / 2);
}
function HILL() {
  fill(133, 108, 9);
  noStroke();
  triangle(-100, windowHeight / 2 + 50, 600, windowHeight / 2 + 50, 200, 75);
  triangle(300, windowHeight / 2 + 50, 1100, windowHeight / 2 + 50, 800, 75);
}
function SUN() {
  fill(255, 204, 51);
  noStroke();
  circle(470, 330, 150);
}

function Character() {
  stroke(0, 0, 0);
  strokeWeight(4);
  fill(0, 3, 105);
  ellipse(510, 530, 15, 30);
  ellipse(490, 530, 15, 30);
  circle(500, 500, 50);
  circle(500, 510, 15);
  circle(500, 510, 2);
  circle(490, 495, 2);
  circle(510, 495, 2);
}
