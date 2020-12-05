
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var dustbin1, dustbin2, dustbin3;
var ground;
var ball;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750, 680,1500,20)
	dustbin = new Dustbin(1200,660);
	ball = new Paper(300,660)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  dustbin.display();
  ball.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
		
	}
}
