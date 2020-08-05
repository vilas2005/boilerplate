function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness, height/2);
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)

}
var car,wall;
  var speed,weight;
  var wall,thickness;
  var bullet,speed, weight;


function draw() {
  background(255,255,255);  
  drawSprites();
  car.collided = wall
  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    
    var deformation=0.5 * weight * speed* speed/22509;
    if (deformation>180) 
    {
       car.shapeColor=color(223,0,0);
    }
    
    if(deformation<180 && deformation>100) 
    {
        car.shapeColor=color(230,230,0); 
    }

    if (deformation<100) 
    {
        car.shapeColor =color(0,255,0);
    }
  } }
  function hasCollided(car, wall)
  { 
      bulletRightEdge=car.x +car.width;
      wallLeftEdge=car.x;
      if (bulletRightEdge>=wallLeftEdge)
      {
          return true
      }
      return false;

    }
     if(hasCollided(car, wall))
     {
       car.velocityX=0;
       var damage=0.5 * weight* speed* speed/(thickness *thickness );

       if(damage>10)
       {
           wall.shapeColor=colour(255,0,0);
       }


       if(damage<10)
       {
           wall.shapeCOlor(255,0,0); 
       }  
      } 
