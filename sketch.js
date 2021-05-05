
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImage , treeImage;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground (500,980,1700,20);
stone = new Stone (248,740);
slingshot = new SlingShot (stone.body , {x:248 , y:740});
mango1 = new Mango(910,470,50,50);
mango2 = new Mango(1010,470,50,50);
mango3 = new Mango(1110,470,50,50);
mango4 = new Mango(810,470,50,50);
mango5 = new Mango(1210,470,50,50);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  imageMode(CENTER);
  background(255,255,255);
  image(boyImage , 300 , 800 , 200 , 250);
  image(treeImage , 1000 , 570 , 600 , 600);


  ground.display();
  stone.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  text(mouseX + "," + mouseY , mouseX , mouseY);
  isTouching(mango1 , stone);
  isTouching(mango2 , stone);
  isTouching(mango3 , stone);
  isTouching(mango4 , stone);
  isTouching(mango5 , stone); 

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
function isTouching(fruit , rock){
  mangoPos = fruit.body.position
  stonePos = rock.body.position
  var distance = dist(stonePos.x , stonePos.y , mangoPos.x , mangoPos.y)
  console.log(distance);
  if(distance <= 75){
    Matter.Body.setStatic(fruit.body , false);
  }
}