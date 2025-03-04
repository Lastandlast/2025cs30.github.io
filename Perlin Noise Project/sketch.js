// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain();
}


function generateTerrain(){
  rectMode(CORNERS)
  for(let x = 0; x < width; x += rectWidth){
    let rectHeight = random(50, 500);
  
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;
    rect(x, height, x2, y2);
  }
  rectMode(CORNER);
  noise(100,200,30000,1111);
}

function draw() {
  // background(220);
 
}
