// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myBook ;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 Text", "Mr. Scott", 
                      123123123, "leatherbound", 
                      222, width*0.3);
  myBook.printOut();
}

function draw() {
  background(200);
  myBook.display();
}

class Book{
  constructor(title , author , isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;

  }

display(){
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textSize(20);

  switch(this.cover){
    case "softcover":
      fill(250,200,150);
    case"hardecover":
      fill(120, 255, 255);
    case"leatherbound":
      fill(150,100,15);
}

  rect(this.x, height/2, this.pages/10,150);
  fill(5);
  text(this.title[0], this.x, height/2 - 50);
}
  printOut(){
    print(this.title + ",by" + this.author);
    print("ISBN: " + this.isbn);
    print("Length: " + this.pages);
  }
}
