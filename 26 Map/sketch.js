// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let textfile;

function preload(){
  textfile = loadStrings("assets/info.txt");
  img = loadStrings("assets/ColorImage.txt");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  //processText();

  rows = img.length;   cols = img[0].length;

  grid = [];
  for(let i = 0; i < rows; i++)
    grid.push(...img[i]);

  colorMap = newmap([
    ["b", "black"],
    ["w", "white"],
    ["r", "sienna"],
    ["l", "peru"],
    ["p",color(150,150,255)]
  ]);

}

function draw() {
  background(220);
}

function processText(){
  print("SPILT TWO WORDS")
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitChars = texFile[1].split("")
  print(splitChars);

  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
  
}
