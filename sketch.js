
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1
var ball2
var roof1

var engine, world
var string1 = 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;
  ball1 = new paper(200,200,30)
  ball2 = new paper(200,200,30)
  ball3 = new paper(200,200,30)
  roof1 = new roof(200,20,100,20)
	//Create the Bodies Here.
string1 = new chain(ball1.body, {x:200, y:20})
string2 = new chain(ball2.body, {x:240, y:20})
string3 = new chain(ball3.body, {x:160, y:20})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ball1.display();
  ball2.display();
  ball3.display();
  roof1.display();
  string1.display();
  string2.display();
  string3.display();
  drawSprites();
 
}



