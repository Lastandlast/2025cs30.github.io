// Image Basics
// Mr.scott
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lionL, lionR;
let pinImages = [];
let currentFrame = 0;
let facing = "left";

function preload() {
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for(let i = 0; i <=8; i++){
    pinImages.push(loadImage("assets/pin-0" + 0 + ".png"));
  
}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(30);
}

function draw() {
  background(220);
  image(pinImages[currentFrame], width/2, height/2);
  currentFrame++;
  if(currentFrame > 8) currentFrame = 0;
  drawlion();
}

function drawlion(){
 
  let sizeX = lionL.width / 2;
  let sizeY = lionL.height / 2;

  if (movedX > 0) facing = "right";
  else if (movedY < 0) facing = "left";

  if (facing === "left") {
    image(lionL, mouseX, mouseY, sizeX, sizeY);
  }
  else {
    image(lionR, mouseX, mouseY, sizeX, sizeY);
  }
}




