// Random vs noise
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let mySeed;
let noiseStart = 5;
let noiseTime = 5;
let noiseSpeed = 0.1;



function setup() {
  createCanvas(600, 600);
  textAlign(CENTER,CENTER);

  mySeed = random(1000);
  frameRate(5);
  // randomNumbers();
  
}

function draw() {
  noiseTime = noiseStart;
  randomSeed(mySeed);
  background(220);
  randomNumbers();
  noiseNumbers();
  noiseStart += noiseSpeed;
}


function noiseNumbers(){
  let x = 100;
  while(x <= 500){
    let randomNum = noise(noiseTime); //0-1 (normalized)
    randomNum = map(randomNum, 0, 1, 1, 100);
    randomNum = round(randomNum);
    fill(255, 220, 140); noStroke();
    circle(x, 200, randomNum);
    fill(0);
    text(randomNum, x, 400);
    x += 50;
    noiseTime += noiseSpeed;
  }  

}


function randomNumbers(){
  let x = 100;
  while(x <= 500){
    let randomNum = round (random(1,100));
    fill(255,255,2); noStroke();
    circle(x, 200, randomNum);
    fill(0);
    text(randomNum, x, 200);
    x += 50;
}
}