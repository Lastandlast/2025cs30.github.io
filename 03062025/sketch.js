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
  angleMode(DEGREES);
  translate(200,200);
  rotate(-frameCount);
  circle(0,0,150);
  let numSpokes = map(mouseX,0,width,1,250);
  let spokeAngle = 360/numSpokes;

  for(let i = 0; i< numSpokes; i++){
    line(0,0,75,0);
    rotate(spokeAngle);
  }

}
