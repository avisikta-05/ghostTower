var tower,towerImage;
var door,doorImage,doorsGroup; 
 var climber,climberImage,climbersGroup;   
var ghost,ghostImage;
 
    
    
function preload (){
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
}

    
  function setup(){
    createCanvas(600,600)
  tower=createSprite(300,300)
  tower.addImage("tower",towerImage)
  doorsGroup=new Group();
  climbersGroup=new Group();
  ghost=createSprite(200,200,50,50)
    ghost.scale=0.3
    ghost.addImage("ghost",ghostImage)
  }
    
  function draw(){
    tower.velocityY=2
    if(tower.y>400 ){
     tower.y=300
    }
if(keyDown("RIGHT")){
  ghost.velocityX=2
  
}
if(keyDown("LEFT")){
  ghost.velocityX=-2
  
}  
if(keyDown("SPACE")){
  ghost.velocityY=-2
} 
  ghost.velocityY=ghost.velocityY+0.8
    
    spawnDoors();
if(climbersGroup.isTouching(ghost)){
 ghost.velocityY=0 
}
  if(ghost.y>600){
  ghost.destroy();
  fill("red")
  textSize(30)
  text("gameover",200,200);
}
    
    
    
    drawSprites();
    

  }
   function spawnDoors(){
  if(frameCount%240===0){
var door=createSprite(200,-50)
door.addImage("door",doorImage)
door.velocityY=1
door.x=Math.round(random(120,400))
door.lifetime=800 
  

 var climber=createSprite(200,10)
 climber.addImage("climber",climberImage)
 climber.velocityY=1
 climber.x=door.x
 climber.lifetime=800    
doorsGroup.add(door)
climbersGroup.add(climber)    
  }
   }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    