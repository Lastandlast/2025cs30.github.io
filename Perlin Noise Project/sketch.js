// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 1;
let noiseScale = 0.01;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
}


function generateTerrain(){
  rectMode(CORNERS);
  for(let x = 0; x < width; x += rectWidth){
    let NOise = noise(x * noiseScale);
    let rectHeight = map(NOise, 0, 1, 50, 500);

    let x2 = x + rectWidth;
    let y2 = height - rectHeight;
    rect(x, height, x2, y2);
  }
  rectMode(CORNER);
  noise(100,200,30000,1111);
  rect(x,y,d)
  if()
}



function draw() {
  
  background(220);
  generateTerrain();
  drawflag()
 
}
