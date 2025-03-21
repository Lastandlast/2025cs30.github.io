// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  DrawRoad();
}


function DrawRoad(){
  rectMode(CENTER)
  fill(0)
  rect(0 , height/2, windowWidth*2, 400);
  
  
  for (let i = 0; i < windowWidth; i++) {
    rect(i*20, height/2, 10, 5);
    fill(210, 235, 52)
    }
}

class vechile(){
  rect(x,y, direction, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    
  }
}