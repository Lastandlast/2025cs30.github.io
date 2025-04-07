// Cars Cars Cars
// Mason
//04042025
let eastbound = [];
let westbound = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    // Create some vehicles and add them to arrays
    eastbound.push(new vehicle(i * 150, height / random(3, 10), 1)); // Create eastbound vehicles (moving right)
    westbound.push(new vehicle(i * 150, height / random(1.5, 0.1), 0)); // Create westbound vehicles (moving left)
  }
}

function draw() {
  DrawRoad();
  background(0);
  for (let i = 0; i < 50; i++) {
    //display each vehicle
    eastbound[i].action();
    westbound[i].action();
  }

  fill(210, 235, 52);
  for (let i = 0; i < windowWidth; i++) {
    // Draw dashed yellow line
    rect(i * 20, height / 2, 10, 5);
  }
}

function DrawRoad() {
  rectMode(CENTER);
  fill(25);
  rect(0, height / 2, windowWidth * 2, 400);
}

class vehicle {
  constructor(x, y, direction) {
    this.type = int(random(2)); // 0 = car, 1 = truck
    this.x = x;
    this.y = y;
    this.direction = direction;
    if (direction === 1) {
      this.xSpeed = random(1, 3);
    } else {
      this.xSpeed = random(-3, -1);
    }
    this.color = color(random(255), random(255), random(255));
  }

  changeColor() {
    // Change to a random color
    this.color = color(random(255), random(255), random(255));
  }
  display() {
    // Display the vehicle based on type
    if (this.type === 0) {
      this.car();
    } else {
      this.truck();
    }
  }
  move() {
    this.x += this.xSpeed;
    if (this.x > width + 100) this.x = -100;
    if (this.x < -100) this.x = width + 100;
  }

  speedUp() {
    // Increase speed
    if (this.direction === 1 && this.xSpeed < 15) this.xSpeed += 0.5;
    else if (this.direction === 0 && this.xSpeed > -15) this.xSpeed -= 0.5;
  }
  speedDown() {
    // Decrease speed
    if (this.direction === 1 && this.xSpeed > 0) this.xSpeed -= 0.5;
    else if (this.direction === 0 && this.xSpeed < 0) this.xSpeed += 0.5;
  }
  action() {
    // Main update function: move, randomly speed up/down/change color, then display
    this.move();
    if (random(1) < 0.01) this.speedUp();
    if (random(1) < 0.01) this.speedDown();
    if (random(1) < 0.01) this.changeColor();
    this.display();
  }
  car() {
    // Draw a car
    fill(this.color);

    rect(this.x, this.y, 100, 40);
  }
  truck() {
    // Draw a truck
    fill(this.color);
    rect(this.x, this.y, 120, 40);
    rect(this.x + 45, this.y - 15, 30, 30);

    fill(50);
    ellipse(this.x - 20, this.y + 20, 20, 20);
    ellipse(this.x + 30, this.y + 20, 20, 20);
  }
}
