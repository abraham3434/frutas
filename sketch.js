const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var piso;
var cuerda;
var cuerda2;
var fruta;
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 piso = new Suelo(515,570,150,150);
 cuerda = new Cuerda(50,50,50,20);
 cuerda2 = new Rope(6,{x:245,y:30})
 
 var fruta_options={
  density:0.001
}
fruta = Bodies.circle(300,300,15,fruta_options)
Matter.Composite.add(cuerda2.body,fruta)
sandia=new Sandia(cuera2,fruta)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
   piso.show();
   cuerda.show();
   cuerda2.show();
   elipse(fruta.position.x,fruta.position.y,15,15);
   Engine.update(engine)
}




