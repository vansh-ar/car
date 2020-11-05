var car,wall;
var speed,weight;

function setup() {
  createCanvas(400,400);
  car=createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  speed= random(55,90)
  speed.velocityX = car
  weight= random(400,1500)
  wall.createSprite(250,200,60,height/3)
}

function draw() {
  background(255,255,255);  
  car.collide(wall);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5  
    if(deformation>180)
    {
      car.shapeColour=colour(255,0,0);
    }
   
    if(deformation>180 && (deformation>100))
    {
      car.shapeColour=colour(230,230,0);
    }
    if(deformation>100)
    {
      car.shapeColour(0,255,0)
    }
  }
  drawSprites();
}