 
var car,wall;
var speed,whight;




function setup() {
 createCanvas(1600,400)

 
 car = createSprite(500,200,50,50);

 car.velocityX = speed;
 car .shapeColor=color(255)

 wall = createSprite(1200,200,60,height/2);
 wall .shapeColor=color(80,80,80);

 speed=random(55,90);
 whight=random(400,1500);
}

function draw() {
  background("black");  
  
  car.velocityX=World.mouseX;
  car.velocityY=World.mouseY;

  drawSprites();
  
  if (wall.x-Car.x <(car.width+wall.width)/2)
 {
  car.velocityX=0;
   var deformation=0.5 *weight*speed*speed/22509;
  if(deformation>180){
    car.shapeColor=color("yellow");
    wall.shapeColor=color("white");
  }
   if(deformation<180 && deformation>100)
   {
     wall.shapeColor("white");
     car.shapeColor=color("green");
   }
   if(deformation<100)
   {
     wall.shapeColor("white");
     car.shapeColor=color("red");
   }
  
 } 

  
}










