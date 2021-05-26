const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    plane2 = new Plane(0,height/2,20,1200);
    plane3 = new Plane(600,0,1200,20);
    plane4= new Plane(width,height/2,20,1200);
    hammer = new Hammer(10,100);
    rubber = new Rubber(600,350,60);
    stone = new Stone(750,450)
    iron = new Iron(500,20)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    plane2.display();
    plane3.display();
    plane4.display()
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
 
}