
function preload(){
var sea, seaImage
var ship, shipImage
//preloads or library of variables
}

function setup(){
  //the setting up the code or game, like making sprites etc. 
  createCanvas(400,400);
 seaImage = loadImage ("sea.png")
 shipImage = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png") 

 ship=createSprite (350,220,20,20) 
 ship.addAnimation ("moving_ship", shipImage)
 ship.scale=0.2

}

function draw() {
  
  if (sea.x  < 0) {
    sea.x = sea.width/2;
  }
  //this is a special function, anything in it will run infinitly, and it will draw gthe thing
  background(seaImage);
  
  drawSprites ()  
}