// Drawing with Shapes Practice
// Your Name
// Feb 10,2025
//
//Global Variables Declaration


function setup() {                          
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  drawcharacter();
}

function drawcharacter(){
  noStroke();
  fill(100, 176, 120);
  rect(windowWidth/2,windowHeight/2, 50,50, 40, 40, 5, 5);
  fill(0,0,0)
  circle(windowWidth/2-12,windowHeight/2+1, 7);
  circle(windowWidth/2+12,windowHeight/2+1, 7);
  rect(windowWidth/2,windowHeight/2+10, 20, 1);
  fill(100, 176, 120);
  rect(windowWidth/2-20,windowHeight/2+28, 3, 20);
  rect(windowWidth/2+20,windowHeight/2+28, 3, 20);
}

