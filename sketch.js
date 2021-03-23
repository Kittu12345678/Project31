const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 75));
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j, 175));
  }

  for(var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 275));
  }

  for(var j = 15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j, 375));
  }
  
}

function draw() {

  Engine.update(engine);

  if(frameCount%60 === 0){
      particles.push(new Ball(random(width/2-10, width/2+10), 10, 10 ))
  }

  background(0); 
  ground.display(); 

  for(var j = 0; j <particles.length; j++){
    particles[j].display();
  }

  for(var j = 0; j <divisions.length; j++){
    divisions[j].display();
  }

  for(var j = 0; j <plinkos.length; j++){
    plinkos[j].display();
  }




  drawSprites();
}