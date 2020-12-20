var moving,stable;

function setup() {
  createCanvas(1200,800);
  moving = createSprite(200,200,50,80);
  stable = createSprite(400,200,80,30);
  moving.shapeColor ="green";
  stable.shapeColor ="green";
}

function draw() {
  background("black");
  moving.x = mouseX;
  moving.y = mouseY; 
  if(moving.x-stable.x < stable.width/2+moving.width/2 && stable.x-moving.x<stable.width/2+moving.width/2 && moving.y-stable.y <stable.height/2+moving.height/2 && stable.y-moving.y<stable.height/2+moving.height/2){
    moving.shapeColor ="red";
    stable.shapeColor ="red";
  } 

  else{
    moving.shapeColor ="green";
    stable.shapeColor ="green";
  }
  drawSprites();
}