// Perlin Noise Project
// Mason
// 02042025

// set width of rectangles, noisescale, and terrianShift speed
let rectWidth = 1;
let noiseScale = 0.015;
let terrianShift = 0;

// Variables to store the highest point of the terrain
let Xpeak = 0;
let Ypeak = 0;

// Variable to store the average height of the terrain
let averageHeight = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function generateTerrain() {
  // Create the terrain
  rectMode(CORNERS);

  let maxHeight = 0; // Set the current maximum height to 0
  let sumHeight = 0; // Set the current sum of heights to 0
  let count = 0; // Set counter to calculate average height
  for (let x = 0; x < width; x += rectWidth) {
    // Loop through the width of the canvas and draw terrain rectangle
    let NOise = noise(x * noiseScale + terrianShift); // Calculate perlin noise value
    let rectHeight = map(NOise, 0, 1, 10, 700);

    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2); // Draw the rectangle

    if (rectHeight > maxHeight) {
      // Check is this the highest point
      maxHeight = rectHeight;
      Xpeak = x;
      Ypeak = y2;
    }

    sumHeight += rectHeight; // add height to sum
    count++;
  }
  let averHeight = sumHeight / count; // calculate average height to y coordinate
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
  // Draw the flag
  fill(0);
  rect(Xpeak, Ypeak - 45, 5, 45);
  fill(255, 0, 0); // flag color
  triangle(Xpeak, Ypeak - 45, Xpeak + 30, Ypeak - 45, Xpeak, Ypeak - 70);
}

function drawaverageline() {
  // Draw the average line
  fill(255, 0, 0);
  strokeWeight(2);
  rect(0, averageHeight, width, 5);
}
