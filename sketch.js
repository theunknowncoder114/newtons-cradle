
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating Bodies 
	 roof = new Roof(800,200,300,20);
	 yBob = 600;
	 xBob = 800;
	 rBob = 40;
	 bob1=new Bob(xBob-rBob*2,yBob,rBob);
	 bob2=new Bob(xBob-rBob,yBob,rBob);
	 bob3=new Bob(xBob,yBob,rBob);
	 bob4=new Bob(xBob+rBob,yBob,rBob);
	 bob5=new Bob(xBob+rBob*2,yBob,rBob);

	 rope1 = new Rope(bob1.body, roof.body)
	 rope2 = new Rope(bob2.body, roof.body)
	 rope3 = new Rope(bob3.body, roof.body)
	 rope4 = new Rope(bob4.body, roof.body)
	 rope5 = new Rope(bob5.body, roof.body)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



