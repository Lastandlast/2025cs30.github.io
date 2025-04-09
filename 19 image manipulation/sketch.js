// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let pilot;

function preload(){
  pilot = loadImage("assets/aviator.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function setPixelColor(pos, r, g, b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function draw() {
  image(pilot,0,0);
  loadPixels();
  drawCharacter();
  
}

function drawCharacter(){
  fill(255);

  for(let x = 0; x < width; x += 10){
    for(let y = 0; y < height; y += 10){
      let loc = (y*pilot.width + x) * 4;
      let avg = avgPixel(loc);

      if(avg > 200) text("&",x,y);
      else if (avg > 150) text("*",x,y);
    }
  }
}
function avgPixel(i){
    let r = pixels[i];
    let g = pixels[i + 1] ;
    let b = pixels[i + 2] ;
}

function greyscale(){
  for (let i = 0; i < pixels.length; i += 4){
    let r = pixels[i];
    let g = pixels[i + 1] ;
    let b = pixels[i + 2] ;
    setPixelColor(i,r,r,r);
  }
}
function boostImage(){
  let boost = map(mouseX,0,width,-100,100);
  for (let i = 0; i < pixels.length; i += 4){
    let r = pixels[i] + boost;
    let g = pixels[i + 1] + boost;
    let b = pixels[i + 2] + boost;
    setPixelColor(i,r,g,b);
  }
}
