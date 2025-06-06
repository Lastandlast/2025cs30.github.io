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
let gravity = 1;
let Jumping = false;
let LevelData;
function setup() {
  createCanvas(windowWidth, windowHeight);
  y = 500
  yspeed = 0
  frameRate(30);
}

function draw() {
  background(255);
  
  push();
  translate(-cameraX, 0);
  image(LevelData,0,windowHeight/2 -250);
  // image(platform, 0, windowHeight/2 -250);
  pop();
  // 
  yspeed += gravity;   
  y += yspeed; 

let groundLevel =900; 
if (y >= groundLevel) {
  y = groundLevel;
  yspeed = 0;
  Jumping = false;
}
push();
scale(0.7)
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
pop();
  currentFrame++
  if(currentFrame > 2) currentFrame = 0;
  //level sensing
  //rect(225,y+55,40,10);
  let bottomsensor = get(mouseX,mouseY);
  print(bottomsensor,mouseX,mouseY);
  
  
  
  usercontrol();  
}


function preload(){
  platform = loadImage("Assets/Background.png");
  MarioStand = loadImage("Assets/Mario Stand.png");
  Mariojump = loadImage("Assets/Mario jump.png");
  Bulletsright = loadImage("Assets/bullets(right).png");
  Bulletsleft = loadImage("Assets/bullets(left).png");
  LevelData = loadImage("Assets/Background-data.png");
  

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
    cameraX += 7;
   
   
  } else if (keyIsDown(LEFT_ARROW)) {
    cameraX -= 7;
   
  } else if (keyIsDown(UP_ARROW) && !Jumping) {
    yspeed = -20;      
    Jumping = true;
    
  }
  
if(keyIsDown(32)){
    let marioX = 200 + cameraX; 
    let marioY = y;
   
    bullets.push({ x: marioX, y: marioY, dir: direction });
  }
if (keyIsDown(UP_ARROW) && !Jumping) {
    yspeed = -20;      
    Jumping = true;
    
}
if (Jumping) direction = "jump"
else if(keyIsDown(LEFT_ARROW))direction = "left"
else if(keyIsDown(RIGHT_ARROW))direction = "right"
else if(keyIsDown(32))direction = "fire"
else direction = "stand"

  
}