// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight);
  vechile = new vechile(windowWidth / 2, windowHeight / 2, 1, 1);
}

function draw() {
  background(220);
  DrawRoad();
  vechile.display();
  vechile.changecolor();
  vechile.update();
}

function DrawRoad() {
  rectMode(CENTER);
  fill(0);
  rect(0, height / 2, windowWidth * 2, 400);

  for (let i = 0; i < windowWidth; i++) {
    rect(i * 20, height / 2, 10, 5);
    fill(210, 235, 52);
  }
}

class vechile {
  constructor(x, y, direction, speed) {
    this.Type = int(random(2)); //0,1}
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    this.color = color(random(255), random(255), random(255));
  }

  changecolor() {
    this.color = color(random(255), random(255), random(255));
  }
  display() {
    fill(this.color);
    if (this.type === 0) {
      rect(this.x - 10, this.y, 10, 40);
      rect(this.x + 10, this.y, 10, 40);
    } else {
      rect(this.x, this.y, 40, 30);
    }

    fill(255, 0, 0);
  }
  update() {
    if (mills - this.timer > this.interval) {
      this.changecolor();
      this.timer = mills;
      this.interval = random(500, 3000);
    }
  }
  action() {}
  move() {}
}
