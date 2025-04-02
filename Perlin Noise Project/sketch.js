// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 1;
let noiseScale = 0.015;
let terrianShift = 0;

let Xpeak = 0;
let Ypeak = 0;

let averageHeight = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function generateTerrain() {
  rectMode(CORNERS);

  let maxHeight = 0;
  let sumHeight = 0;
  let count = 0;
  for (let x = 0; x < width; x += rectWidth) {
    let NOise = noise(x * noiseScale + terrianShift);
    let rectHeight = map(NOise, 0, 1, 10, 700);

    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);

    if (rectHeight > maxHeight) {
      maxHeight = rectHeight;
      Xpeak = x;
      Ypeak = y2;
    }

    sumHeight += rectHeight;
    count++;
  }
  let averHeight = sumHeight / count;
  averageHeight = height - averHeight;
  rectMode(CORNER);
}

function draw() {
  background(220);
  generateTerrain();
  flag();
  terrianShift += 0.1;
  drawaverageline();
}

function flag() {
  fill(0);
  rect(Xpeak, Ypeak - 45, 5, 45);
  fill(255, 0, 0);
  triangle(Xpeak, Ypeak - 45, Xpeak + 30, Ypeak - 45, Xpeak, Ypeak - 70);
}

function drawaverageline() {
  fill(255, 0, 0);
  strokeWeight(2);
  rect(0, averageHeight, width, 5);
}
