// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let tSize = 10;
let x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
}

function draw() {
  background(500);
  //print("Current frame: " + frameCount);
  fill("green");
  textSize(tSize);
  text(mouseX + ", " + mouseY + "," + mouseButton, mouseX, mouseY);
  fill(255,200,100);
  square(x,200,58,5);
  if(keyIsDown(LEFT_ARROW)){
    x -= 5;
    if (x < 0){
      x = width;
    }
  }
  if(keyIsDown(RIGHT_ARROW)){
    x += 5;
    if (x > width){
      x = 0;
  }
}
}

function mousePressed(){
  tSize = random(10, 100);
}