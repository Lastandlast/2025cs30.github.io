// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let singleWalker;
let walkers = [];
const NUM_WALKERS = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);

  singleWalker = new Walker(100, 150, "green");
  initWalker();
}

function initWalker(){
  for(let i =0; i < NUM_WALKERS; i++){
    let c = color(random(255), random(255), random(255));
    let w = new Walker(random(width), random(height), c);
    walkers.push(w);
}
}

function draw() {
  //background(220);
  // singleWalker.move();
  // singleWalker.display();
  // for(let currentWalker of walkers){
  //   currentWalker.move();
  //   currentWalker.display();
  // }
  fill(100,50,255,50);
  circle(mouseX, mouseY, 30);
  for(let i = 0; i < walkers.length; i++){
    let w = walkers[i];
    w.move();
    w.display();

    if(dist(w.x, w.y, mouseX, mouseY) > 30){
      walkers.splice(i,1);
      i--;
    } 
  }
}


class Walker{

  constructor(x,y,c){
    this.x = x;
    this.y = y;
    this.c = c;
    this.speed = random(2,10);
    this.size = 5;
  }

  display(){
    rectMode(CENTER);
    fill(this.c);
    square(this.x, this.y, this.size);
  }

  move(){
    let choice = floor(random(4));//0, 1, 2, 3
    switch(choice){
      case 0:
        this.x -= this.speed;  break;
      case 1:
        this. x += this.speed; break;
      case 2:
        this.y -= this.speed; break;
      case 3:
        this.y += this.speed; break;
    }

  }
}