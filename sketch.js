
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score, ground, gameState
var END=1
var PLAY=0
var monkey_stop
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  monkey_stop=loadAnimation("sprite_0.png")
 
}



function setup() {
  createCanvas(400,400)
  monkey=createSprite(40,315,20,20)
  monkey.addAnimation("running", monkey_running);
  monkey.addAnimation("stop", monkey_stop);
  monkey.scale=0.15
  ground=createSprite(200,380,400,40)
  obstacleGroup=createGroup();
  foodGroup=createGroup();
  score=0
  gameState=PLAY;
}


function draw() {
background("white")
text ("Survival Time: "+ score, 200,10)
 if (gameState===PLAY){
     if (keyDown("space")&& monkey.y>250){
    monkey.velocityY=monkey.velocityY-5
    
    
  }
   
   score=Math.round(frameCount/10);
 monkey.velocityY=monkey.velocityY+2
  
  monkey.collide(ground);
  spawnFood();
  spawnObstacles();
   if (obstacleGroup.isTouching(monkey)){
    gameState=END}
   
   if (foodGroup.isTouching(monkey)){
      score=score+10
      foodGroup.destroyEach();
   }
}
  
  if (gameState===END){
    monkey.velocityX=0
     monkey.changeAnimation("stop", monkey_stop);
    obstacleGroup.setVelocityXEach(0)
    obstacleGroup.setLifetimeEach
     foodGroup.setVelocityXEach(0)
    foodGroup.setLifetimeEach(-1)
    monkey.velocityY=0
    
    
  }
drawSprites();

}


function spawnObstacles(){
  if (frameCount % 300 ===0){
    var obstacle=createSprite(400,340,10,40);
    obstacle.scale=0.15
    obstacle.velocityX=-8
    obstacle.addImage(obstacleImage)
    obstacleGroup.add(obstacle);

  }
}
function spawnFood(){
  if (frameCount % 80 ===0){
    var banana=createSprite(400,200,10,40);
    banana.scale=0.15
    banana.velocityX=-8
    banana.addImage(bananaImage)
    foodGroup.add(banana)
  }
}