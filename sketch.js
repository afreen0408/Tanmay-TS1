const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var ground,stand1,stand2,polygon;

var block1,block2,block3,block4,block5,block6,block7,block8,block9;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
engine=Engine.create();
world=engine.world;
Engine.run(engine);
  block1 = new Box (330,330,30,40);
  block2 = new Box (360,330,30,40); 
  block3 = new Box(390,330,30,40);
  block4 = new Box (420,330,30,40);
  block5 = new Box (450,330,30,40);

  block6 = new Box (360,195,30,40);
  block7 = new Box (390,195,30,40);
  block8 = new Box (420,195,30,40);

  block9 = new Box (390,155,30,40);
 
 // block10 = new Block (330,235,30,40);
  

  ground=new Ground(400,380,800,20);
  stand1=new Ground(400,335,200,10);


  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
//imageMode(CENTER)
//image(polygon_img,polygon.position.x,polygon.position.y,40,40);
  
  launcherObject=new launcher(this.polygon,{x:100,y:200});
}


function draw() {
  background(180);  
  drawSprites();

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   ground.display();
   stand1.display();

   launcherObject.display();
   ellipseMode(RADIUS)
   ellipse(polygon.position.x,polygon.position.y,10,10);
}
function mouseDragged()
{
	Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
     //distance=int(dist(polygon.x,polygon.y,block1.x,block1.y ,block2.x,block2.y,block3.x,block3.y,block4.x,block4.y,block5.x,block5.y,block6.x,block6.y,block7.x,block7.y,block8.x,block8.y,block9.x,block9.y));
}