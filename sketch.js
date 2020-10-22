
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;	

function preload()
{
	
}

function setup() {
	createCanvas(800, 700,);


	engine = Engine.create();
	world = engine.world;
	
	bobObject1 = new Bob (250,500,40);
	bobObject1.shapeColor=color(255,0,0)
	
	bobObject2 = new Bob (300,500,40);
	bobObject2.shapeColor=color(255,0,0)
	
	bobObject3= new Bob (350,500,40);
	bobObject3.shapeColor=	rgb(255,0,0) ;
	
	bobObject4= new Bob (400,500,40);
	bobObject4.shapeColor=color(255,0,0)
	
	bobObject5= new Bob (450,500,40);
	bobObject5.shapeColor=color(255,0,0)
	   
	roof= new Roof (380,300,415,30)
	   

	rope1 = new Rope(bobObject1.body,roof.body,-80,0);
	rope2 = new Rope(bobObject2.body,roof.body,-40,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,40,0);
	rope5 = new Rope(bobObject5.body,roof.body,80,0);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 
 
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

roof.display();

line (bobObject1.body.position.x , bobObject1.body.position.y , roof.body.position.x , roof.body.position.y )
line (bobObject2.body.position.x , bobObject2.body.position.y , roof.body.position.x , roof.body.position.y )
line (bobObject3.body.position.x , bobObject3.body.position.y , roof.body.position.x , roof.body.position.y )
line (bobObject4.body.position.x , bobObject4.body.position.y , roof.body.position.x , roof.body.position.y )
line (bobObject5.body.position.x , bobObject5.body.position.y , roof.body.position.x , roof.body.position.y )


drawSprites();
}

function keyPressed(){
      if (keyCode===UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	  }

}

