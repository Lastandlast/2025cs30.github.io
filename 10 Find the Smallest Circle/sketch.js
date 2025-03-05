// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const NUM_CIRCLES = 1000;
function setup() {
  createCanvas(windowWidth, windowHeight);
  drawCircles();
}

function drawCircles(){
  noFill();

  let smallestDiameter = Infinity;
  let smallX , smallY;
  for(let i = 0; i < NUM_CIRCLES; i++){
    let x = random(0, width);
    let y = random(0, height);
    let d = random(20,80);

    circle(x, y ,d);
    if(d < smallestDiameter){
      smallestDiameter = d;
      smallX = x;  smallY = y;
    }
  }

  fill(255,255,0);
  circle(smallX, smallY, smallestDiameter);



}

function draw() {
  //background(220);
}
