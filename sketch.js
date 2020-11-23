const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mangoObject1,mangoObject2,mangoObject3,mangoObject4,mangoObject5,mangoObject6,mangoObject7,mangoObject8,mangoObject9,mangoObject10;
var treeObject;
var ground;
var boyimg;
var stoneObject;
var Elasticc;

function preload()
{
  boyimg = loadImage("Plucking mangoes/boy.png");	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  ground = new Ground(650,580,1300,20);
  mangoObject1 = new Mango(920,200,60);
  mangoObject2 = new Mango(840,230,60);
  mangoObject3 = new Mango(750,245,60);
  mangoObject4 = new Mango(880,190,60);
  mangoObject5 = new Mango(740,105,60);
  mangoObject6 = new Mango(780,120,60);
  mangoObject7 = new Mango(725,180,60);
  mangoObject8 = new Mango(600,240,60);
  mangoObject9 = new Mango(652,175,60);
  mangoObject10 = new Mango(565,185,60);
  treeObject = new Tree(700,500);
  stoneObject = new Stone(335,480,25);
  Elasticc = new ElasticC(stoneObject.body, {x: 350, y:425});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(255);

  textSize(25);
  fill(0);
  text("Press space to get a second chance",100,100);
  image(boyimg,200,350,200,300);

  ground.display();
  treeObject.display();
  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  mangoObject6.display();
  mangoObject7.display();
  mangoObject8.display();
  mangoObject9.display();
  mangoObject10.display();
  stoneObject.display();
  Elasticc.display();

  detectCollision(stoneObject,mangoObject1);
  detectCollision(stoneObject,mangoObject2);
  detectCollision(stoneObject,mangoObject3);
  detectCollision(stoneObject,mangoObject4);
  detectCollision(stoneObject,mangoObject5);
  detectCollision(stoneObject,mangoObject6);
  detectCollision(stoneObject,mangoObject7);
  detectCollision(stoneObject,mangoObject8);
  detectCollision(stoneObject,mangoObject9);
  detectCollision(stoneObject,mangoObject10);

}

function keyPressed() {
  if(keyCode === 32) {
    Matter.Body.setPosition(stoneObject.body,{x: 350, y: 425});
    Elasticc.attach(stoneObject.body);
  }
}


function mouseDragged(){
  Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Elasticc.fly();
}

function detectCollision(lstone,lmango) {
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  if(distance<=lmango.r+lstone.r) {
    Matter.Body.setStatic(lmango.body,false);
  }
}