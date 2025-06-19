let platform;
let Mariomoveright = [];
let Mariomoveleft = [];
let MarioStand;
let Mariojump;
let Bulletsright;
let Bulletsleft;

let Enemies = [];
let bullets = [];
let enemyObjects = [];

let currentFrame = 0;
let cameraX = 0;
let speed = 10;
let direction = "right";
let gravity = 1;
let Jumping = false;
let LevelData;
let Sensors = [];
let gameOver = false;

let y;
let yspeed;

function preload() {
  platform = loadImage("Assets/Background.png");
  MarioStand = loadImage("Assets/Mario Stand.png");
  Mariojump = loadImage("Assets/Mario jump.png");
  Bulletsright = loadImage("Assets/bullets(right).png");
  Bulletsleft = loadImage("Assets/bullets(left).png");
  LevelData = loadImage("Assets/Background-data.png");

  for (let i = 0; i < 3; i++) {
    Mariomoveright.push(loadImage("Assets/Mariomoveright-0" + i + ".png"));
  }
  for (let i = 0; i < 3; i++) {
    Mariomoveleft.push(loadImage("Assets/Mariomoveleft-0" + i + ".png"));
  }
  for (let i = 0; i < 2; i++) {
    Enemies.push(loadImage("Assets/Enemies-0" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, 480);
  y = 300;
  yspeed = 0;
  frameRate(30);

  initializeGame();
}

function draw() {
  usercontrol();

  if (gameOver) {
    background(255, 0, 0);
    fill(255);
    textAlign(CENTER);
    textSize(50);
    text("GAME OVER", width / 2, height / 2);
    textSize(20);
    text("Press R to restart", width / 2, height / 2 + 50);
    return;
  }

  background(255);

  push();
  translate(-cameraX, 0);
  image(platform, 0, 0);

  for (let enemy of enemyObjects) {
    if (enemy.alive) {
      enemy.yspeed += gravity;
      enemy.y += enemy.yspeed;

      let checkX = constrain(enemy.x + 20, 0, LevelData.width - 1);
      let checkY = constrain(enemy.y + 40, 0, LevelData.height - 1);
      let bottomCheck = LevelData.get(checkX, checkY);

      while (JSON.stringify(bottomCheck) === JSON.stringify([255, 0, 0, 255])) {
        enemy.y -= 1;
        enemy.yspeed = 0;
        checkY = constrain(enemy.y + 40, 0, LevelData.height - 1);
        bottomCheck = LevelData.get(checkX, checkY);
      }

      let newX = enemy.x + enemy.direction * enemy.speed;

      let leftCheckX = constrain(newX, 0, LevelData.width - 1);
      let rightCheckX = constrain(newX + 40, 0, LevelData.width - 1);
      let checkYMid = constrain(enemy.y + 20, 0, LevelData.height - 1);

      let leftCheck = LevelData.get(leftCheckX, checkYMid);
      let rightCheck = LevelData.get(rightCheckX, checkYMid);

      if (
        JSON.stringify(leftCheck) === JSON.stringify([255, 0, 0, 255]) ||
        JSON.stringify(rightCheck) === JSON.stringify([255, 0, 0, 255])
      ) {
        enemy.direction *= -1;
      } else {
        enemy.x = newX;
      }

      image(Enemies[0], enemy.x, enemy.y, 40, 40);
    }
  }

  pop();

  yspeed += gravity;
  y += yspeed;

  checkSensors();

  if (direction === "right") {
    image(Mariomoveright[currentFrame], 200, y);
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

    if (bullets[i].x - cameraX > width + 50 || bullets[i].x - cameraX < -50) {
      bullets.splice(i, 1);
    }
  }

  let marioX = 200 + cameraX;
  let marioWidth = 40;
  let marioHeight = 40;

  for (let enemy of enemyObjects) {
    if (enemy.alive) {
      if (
        marioX < enemy.x + 40 &&
        marioX + marioWidth > enemy.x &&
        y < enemy.y + 40 &&
        y + marioHeight > enemy.y
      ) {
        gameOver = true;
        break;
      }
    }
  }

  for (let i = bullets.length - 1; i >= 0; i--) {
    let bullet = bullets[i];
    let bulletWidth = 10;
    let bulletHeight = 10;

    for (let j = enemyObjects.length - 1; j >= 0; j--) {
      let enemy = enemyObjects[j];
      if (enemy.alive) {
        if (
          bullet.x < enemy.x + 40 &&
          bullet.x + bulletWidth > enemy.x &&
          bullet.y < enemy.y + 40 &&
          bullet.y + bulletHeight > enemy.y
        ) {
          enemy.alive = false;
          bullets.splice(i, 1);

          break;
        }
      }
    }
  }

  noFill();
  rect(200, y, 40, 40);

  currentFrame++;
  if (currentFrame > 2) currentFrame = 0;
}

function checkSensors() {
  let checkX = constrain(220 + cameraX, 0, LevelData.width - 1);
  let checkY = constrain(y + 40, 0, LevelData.height - 1);
  Sensors[0] = LevelData.get(checkX, checkY);
  while (JSON.stringify(Sensors[0]) === JSON.stringify([255, 0, 0, 255])) {
    y -= 1;
    checkY = constrain(y + 40, 0, LevelData.height - 1);
    Sensors[0] = LevelData.get(checkX, checkY);
    yspeed = 0;
    Jumping = false;
  }

  checkX = constrain(220 + cameraX, 0, LevelData.width - 1);
  checkY = constrain(y, 0, LevelData.height - 1);
  Sensors[1] = LevelData.get(checkX, checkY);
  while (JSON.stringify(Sensors[1]) === JSON.stringify([255, 0, 0, 255])) {
    y += 1;
    checkY = constrain(y, 0, LevelData.height - 1);
    Sensors[1] = LevelData.get(checkX, checkY);
    yspeed = 0;
  }

  let marioLeftCheckX = constrain(200 + cameraX, 0, LevelData.width - 1);
  let marioMidY = constrain(y + 20, 0, LevelData.height - 1);
  let leftWallSensor = LevelData.get(marioLeftCheckX, marioMidY);
  if (JSON.stringify(leftWallSensor) === JSON.stringify([255, 0, 0, 255])) {
    cameraX += 7;
  }

  let marioRightCheckX = constrain(200 + 40 + cameraX, 0, LevelData.width - 1);
  let rightWallSensor = LevelData.get(marioRightCheckX, marioMidY);
  if (JSON.stringify(rightWallSensor) === JSON.stringify([255, 0, 0, 255])) {
    cameraX -= 7;
  }
}

function usercontrol() {
  if (gameOver) {
    if (keyIsDown(82)) {
      initializeGame();
      gameOver = false;
    }
    return;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    cameraX += 7;
  } else if (keyIsDown(LEFT_ARROW)) {
    cameraX -= 7;
  }

  if (keyIsDown(UP_ARROW) && !Jumping) {
    yspeed = -20;
    Jumping = true;
  }

  if (keyIsDown(32)) {
    let marioX = 200 + cameraX;
    let marioY = y;
    bullets.push({ x: marioX + 40, y: marioY + 20, dir: direction });
  }

  if (Jumping) direction = "jump";
  else if (keyIsDown(LEFT_ARROW)) direction = "left";
  else if (keyIsDown(RIGHT_ARROW)) direction = "right";
  else direction = "stand";
}

function initializeGame() {
  cameraX = 0;
  y = 300;
  yspeed = 0;
  bullets = [];
  enemyObjects = [];

  for (let i = 0; i < 5; i++) {
    enemyObjects.push({
      x: random(600, 1500),
      y: 100,
      alive: true,
      direction: random() > 0.5 ? 1 : -1,
      speed: random(1, 3),
      yspeed: 0,
    });
  }
}
