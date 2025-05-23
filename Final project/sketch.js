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
let speed = 10;



function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(30);
}

function draw() {
  background(255);
  scale(1);
  push();
  translate(-cameraX, 0);
  image(platform, 0, windowHeight/2 -250);
  pop();
  scale(0.7)
  image(Mariomove[currentFrame], 200, windowHeight / 2 - 250);
  
  currentFrame++
  if(currentFrame > 2) currentFrame = 0;
  usercontrol();  
}


function preload(){
  platform = loadImage("Assets/Background.png");
  MarioStand = loadImage("Assets/Mario Stand.png")

  for(let i = 0; i < 3; i++){
    Mariomove.push(loadImage("assets/Mariomove-0" + i + ".png"));
  }
  for(let i = 0; i < 3; i++){
    Mariomove.push(loadImage("assets/Mariomove-0" + i + ".png"));
  }
}
function usercontrol() {
  if (keyIsDown(RIGHT_ARROW)) {
    cameraX += speed;
   
  } else if (keyIsDown(LEFT_ARROW)) {
    cameraX -= speed;
    
  }
}

