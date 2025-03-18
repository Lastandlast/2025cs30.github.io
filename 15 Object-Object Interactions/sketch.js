// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let nodes = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  if(mouseIsPressed)nodes.push(new Node(mouseX, mouseY));
  for(let n of nodes){
    n.move();
    n.display();
    n.connect(nodes);
  }
}

function mousePressed(){
  // nodes.push(new Node(mouseX, mouseY));
}

class Node{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.size = 20;
    this.c = color(random(255), random(255), random(255));


    this.xTime = random(10); 
    this.yTime = random(10);
    this.timeShift = 0.01;
    this.maxSpeed = 5;
  }

  display(){
    fill(this.c);
    noStroke();

    circle(this.x, this.y, this.size);
  }

  connect(nodeArray){
    stroke(this.c);
    for(let n of nodes){
      if(n !== this){
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){
          line(this.x, this.y, n.x, n.y);

        }
      }
    }


  }

  move(){
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x < 0 || this.x > width){
    }else if (this.x > width){ this.x = 0;}

    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if(this.y < 0 || this.y > height){
    }else if (this.y > height){ this.y = 0;}
  
  }
}
