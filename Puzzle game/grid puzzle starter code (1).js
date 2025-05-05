

let NUM_ROWS = 4;
let NUM_COLS = 5;
let rectWidth, rectHeight;
let currentRow, currentCol;
let gridData = [[,0,255,0,0],
                [0,0,255,0,0],
                [0,255,0,0,0],
                [255,255,255,0,0]];



function setup() {
 
  createCanvas(windowWidth, windowHeight);
  rectWidth = width/NUM_COLS;
  rectHeight = height/NUM_ROWS;
  
}

function draw() {
  background(220);
  determineActiveSquare();  
  drawGrid();                
}



function mousePressed(){
 
  flip(currentCol, currentRow);
  flip(currentCol-1, currentRow);
  flip(currentCol+1, currentRow);
  flip(currentCol, currentRow-1);
  flip(currentCol, currentRow+1);
}


function flip(col, row){
 
  if (col >= 0 && col < NUM_COLS ){
    if (row >= 0 && row < NUM_ROWS){
      if (gridData[row][col] === 0) gridData[row][col] = 255;
      else gridData[row][col] = 0;
    }
  }
}

function determineActiveSquare(){
  
  currentRow = int(mouseY / rectHeight);
  currentCol = int(mouseX / rectWidth);
}

function drawGrid(){
  for (let x = 0; x < NUM_COLS ; x++){
    for (let y = 0; y < NUM_ROWS; y++){
      let c = gridData[y][x];
      fill(c[0], c[1], c[2]); 
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}




