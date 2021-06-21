var runner, boy, edges;
var path, path_track;
var invisibleLeft;
var invisibleRight;


function preload(){
  path_track=loadImage("path.png");
  boy=loadAnimation("Runner-1.png","Runner-2.png");
  
  
  //pre-load images
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200);
  path.addImage("pathImg", path_track);
  path.velocityY= -3;
  path.scale=1;

  runner=createSprite(300,300,20,30);
  runner.addAnimation("runnerboy",boy);
  edges=createEdgeSprites();
  runner.scale = 0.1;
  //create sprites here
invisibleLeft = createSprite(50,200,10,400);
invisibleLeft.visible=false;
invisibleRight = createSprite(350,200,10,400);
invisibleRight.visible=false;

}

function draw() {
  background("red");

 if (path.y<0){
   path.y=path.width/2;
 }

 runner.x=World.mouseX; 

runner.bounceOff(invisibleLeft);
runner.bounceOff(invisibleRight);


drawSprites();
}

