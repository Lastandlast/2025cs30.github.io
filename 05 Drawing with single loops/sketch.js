// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   gradientBackground();
//   circleLine();
// }

// function gradientBackground(){
//   let h = 10;
//   for(let y = 0; y < height; y += h){
//     noStroke();
//     let mappedY = map(y,0,height,0,255);
//     let reversedY = map (y,0,height,255,0);
//     fill(mappedY, reversedY, 0);
//     rect(0, y, width, h);
    
//   }
// }


// function circleLine(){
//   let d = 40;
//   let y  = height/2;
//   let xStart = 30;
//   let xEnd = mouseX;

//   for(let x = xStart; x <= xEnd; x+=d){

//     circle(x, y, d);
//   }
// }


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(1);
  circleLine();
}

function circleLine(){
  let d = 40;
  let y  = height/2;
  let xStart = 30;
  let xEnd = mouseX;

  for(let x = xStart; x <= xEnd; x+=d){

    circle(x, y, d);
  }
}