var canvas;
var music;
var movingRect,f1,f2,f3,f4;
var wall1,wall2,wall3,wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingRect= createSprite(350,350,20,20);
    movingRect.shapeColor="white";

    f1= createSprite(150,500,100,25);
    f1.shapeColor="blue";
 
    f2= createSprite(150,150,100,25);
    f2.shapeColor="yellow";
    
    f3= createSprite(550,150,100,25);
    f3.shapeColor="green";

    f4= createSprite(550,500,100,25);
    f4.shapeColor="pink";

    wall1= createSprite(400,10,800,5);
    wall1.shapeColor="grey";
    wall2= createSprite(10,300,5,600);
    wall2.shapeColor="grey";
    wall3= createSprite(400,590,800,5);
    wall3.shapeColor="grey";
    wall4= createSprite(790,300,5,600);
    wall4.shapeColor="grey";

    //create box sprite and give velocity
    movingRect.velocityX=5;
    movingRect.velocityY=5;
}

function draw() {
    background(125);


    //add condition to check if box touching surface and make it box
    
if(movingRect.isTouching(f1)){
    movingRect.shapeColor="blue";
}
if(movingRect.isTouching(f2)){
    movingRect.shapeColor="yellow";
    
}
if(movingRect.isTouching(f3)){
    movingRect.shapeColor="green";
}
if(movingRect.isTouching(f4)){
    movingRect.shapeColor="pink";
}

if(movingRect.isTouching(f2)){
    movingRect.velocityX=0;
    movingRect.velocityY=0;
}

    movingRect.bounceOff(f1);
    movingRect.bounceOff(f2);
    movingRect.bounceOff(f3);
    movingRect.bounceOff(f4);
    movingRect.bounceOff(wall1);
    movingRect.bounceOff(wall2);
    movingRect.bounceOff(wall3);
    movingRect.bounceOff(wall4);
    drawSprites();
}
