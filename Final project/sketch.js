// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let platform;
let Mariomoveright = [];
let Mariomoveleft = [];
let Enemies = [];
let bullets = [];
let currentFrame = 0;
let cameraX = 0;
let speed = 10;
let direction = "right"
let y = 200;
let yspeed = 0;
let gravity = 1;
let isJumping = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  y = 200
  yspeed = 0
  frameRate(30);
}

function draw() {
  background(255);
  scale(2);
  push();
  translate(-cameraX, 0);
  image(platform, 0, windowHeight/2 -250);
  pop();
  scale(0.4)
  yspeed += gravity;   
  y += yspeed; 

  if (y >= 200) {       
   y = 1025;
   yspeed = 0;
   isJumping = false;  
  }
  let marioY = y;
  if (direction === "right") {
    image(Mariomoveright[currentFrame], 200,y);
  } else if (direction === "left") {
    image(Mariomoveleft[currentFrame], 200, y);
  } else if (direction === "stand") {
    image(MarioStand, 200, y);
  } else if (direction === "jump") {
    image(Mariojump, 200, y);
  }
      for (let i = bullets.length - 1; i >= 0; i--) {
        bullets[i].x += 15; 
        image(Bulletsright, bullets[i].x - cameraX, bullets[i].y); 
        
      }

  currentFrame++
  if(currentFrame > 2) currentFrame = 0;
  usercontrol();  
}


function preload(){
  platform = loadImage("Assets/Background.png");
  MarioStand = loadImage("Assets/Mario Stand.png");
  Mariojump = loadImage("Assets/Mario jump.png");
  Bulletsright = loadImage("Assets/bullets(right).png");
  Bulletsleft = loadImage("Assets/bullets(left).png");
  

  for(let i = 0; i < 3; i++){
    Mariomoveright.push(loadImage("Assets/Mariomoveright-0" + i + ".png"));
  }
  for(let i = 0; i < 3; i++){
    Mariomoveleft.push(loadImage("Assets/Mariomoveleft-0" + i + ".png"));
  }
  for(let i = 0 ; i < 2; i++){
    Enemies.push(loadImage("Assets/Enemies-0" + i + ".png"));
  }
}
function usercontrol() {
  if (keyIsDown(RIGHT_ARROW)) {
    cameraX += 10;
    direction = "right"
   
  } else if (keyIsDown(LEFT_ARROW)) {
    cameraX -= 10;
    direction = "left" 
  } else if (keyIsDown(UP_ARROW) && !isJumping) {
    yspeed = +300;      
    isJumping = true;
    direction = "jump";
  }else if(keyIsDown(32)){
    let marioX = 200 + cameraX; 
    let marioY = y;
    direction = "fire"
    bullets.push({ x: marioX, y: marioY, dir: direction });
  }else{
    direction = "stand"
  }
}