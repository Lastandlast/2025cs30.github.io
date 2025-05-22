// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let platform;
let Mariomove = [];
let currentFrame = 0;
let cameraX = 0;
let speed = 50;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  scale(1.5);
  translate(-cameraX, 0);
  image(platform, 0, windowHeight/2 -250,0,0,0,-170);
  scale(0.7)
  image(Mariomove[currentFrame], cameraX, windowHeight / 2 - 200);
  currentFrame = currentFrame + 1 % 2;
  
}

function preload(){
  platform = loadImage("Assets/Background.png");
  MarioStand = loadImage("Assets/Mario Stand.png")

  for(let i = 0; i < 2; i++){
    Mariomove.push(loadImage("assets/Mariomove-0" + i + ".png"));
  }
}
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    cameraX += speed;
    cameraX = constrain(cameraX, 0, platform.width - width);
  } else if (keyCode === LEFT_ARROW) {
    cameraX -= speed;
    cameraX = constrain(cameraX, 0, platform.width - width);
  }
}

