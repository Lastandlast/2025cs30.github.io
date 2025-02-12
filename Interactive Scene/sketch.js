// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(1000, windowHeight);
}

function draw() {
  background(96, 163, 224);
  SUN();
  HILL();
  RIVER();
  Character()
}
function RIVER(){
  fill(18, 82, 140);
  noStroke();
  rect(0,500,windowWidth,windowHeight/2);
 
}
function HILL(){
  fill(133, 108, 9);
  noStroke();
  triangle(-100, windowHeight/2 + 50, 600, windowHeight/2 + 50, 200, 75);
  triangle(300, windowHeight/2 + 50, 1100, windowHeight/2 + 50, 800, 75);
}
function SUN(){
  fill(255, 204, 51);
  noStroke();
  circle(470,330,150);
}

function Character(){
  stroke(0, 0, 0);
  strokeWeight(4);
  fill( 0, 3, 105);
  ellipse(500, 530, 15, 30);
  circle(500,500,50);
  circle(500,510,15);
  circle(500,510,2);
  circle(490,495,2);
  circle(510,495,2);
  

}