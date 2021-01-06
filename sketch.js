const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var plinko = []
function setup() {
  
  createCanvas(500,500)
  engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,460,1200,20);
   division1 = new Division(50,400,20,100)
   division2 = new Division(150,400,20,100)
   division3 = new Division(250,400,20,100)
   division4 = new Division(350,400,20,100)
   division5 = new Division(450,400,20,100)
   for(var i=0;i<500;i=i+80){
   plinko.push(new Plinko(i,100))
   }
   for(var i=0;i<500;i=i+80){
    plinko.push(new Plinko(i,200))
    }
    for(var i=0;i<500;i=i+80){
      plinko.push(new Plinko(i,300))
      }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()
  ground.display()
  for(var i=0;i<plinko.length;i++){
  plinko[i].display()
  }
  if(particle!=null) 
  {
     particle.display();
      if (particle.body.position.y>760) 
    {
       if (particle.body.position.x < 300) 
      {
         score=score+500;
          particle=null;
          if ( count>= 5) gameState ="end"; 
    } 
    else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
    {
       score = score + 100;
        particle=null;
        if ( count>= 5) gameState ="end"; 
  } 
  else if (particle.body.position.x < 900 && particle.body.position.x > 601 ) 
  {
     score = score + 200;
      particle=null; 
      if ( count>= 5) gameState ="end";
     }
     }
     
    }
  drawSprites();
}