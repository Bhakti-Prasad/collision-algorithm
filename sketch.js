var movingRect,fixedRect;



function setup() {
  createCanvas(800,400);
  movingRect =createSprite(400,200, 50,50);
  movingRect.shapeColor="blue";
  fixedRect =createSprite(300,200, 50,50);
  fixedRect.shapeColor="blue";
  movingRect.debug=true;
  fixedRect.debug=true;
}

function draw() {
  background(0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY; 
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
     fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 &&
     fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2 ) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="yellow";
  }
  drawSprites();
}