// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x,y;
let xSpeed, ySpeed;
let totalBounces = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2; y = height/2;
  xSpeed = 400; ySpeed = 200;
  if(localStorage.getItem("numBounces")===null){
    localStorage.setItem("numBounces")
  }else{
    totalBounces = int(localStorage.getItem("numBounces"))
  }
  textSize(30); textAlign(CENTER, CENTER);
}

function draw() {
  background(220);
  updateBall();
  text(totalBounces, width/2, height/2);
}

function updateBall(){
  x += xSpeed; y+=ySpeed;
  if(x < 0 || x > width){
    xSpeed *= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }
  if(y<0||y>height){
    ySpeed*=-1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }
  circle(x,y,20);
}
