// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  randomSeed(1);
  squareFractal(width/2, height/2, height/2);
}

function squareFractal(x,y,sideL){
  fill(random(255),random(255), random(255),100);
  square(x,y,sideL);

  if(sideL > 5){
    squareFractal(x-sideL/2, y-sideL/2. sideL/2);
    squareFractal(x-sideL/2, y+sideL/2. sideL/2);
    squareFractal(x+sideL/2, y-sideL/2. sideL/2);
    squareFractal(x+sideL/2, y+sideL/2. sideL/2);
  }
}