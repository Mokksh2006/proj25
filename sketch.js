const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1, bin2, bin3;
var paper;
var ground;
var count = 0;


function preload()
{
	
}

function setup() {
	createCanvas(2000, 700);

    binImg = loadImage("dustbingreen.png");
	engine = Engine.create();
	world = engine.world;

	
	ground = new Ground(width/2,660,width,20);
	
    paper = new Paper(0,600,50);
    
    
    
	
	bin1 = new Bin(902,575,10,120);
    bin2 = new Bin(962,635,130,10);
    bin3 = new Bin(1024,575,10,120);
    bin1.image = loadImage("dustbingreen.png");
   

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
 
paper.display();
ground.display();
bin1.display();
bin2.display();
bin3.display();
 
}
function keyPressed(){
	if(keyCode == UP_ARROW && count == 0) {
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
        count++;
	}
  }



