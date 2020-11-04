const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var enemy,enemyIMG, Genemy,GenemyIMG, Bememy, BememyIMG, VGenemy,VGenemy, enemyGroup,GenemyGroup,BenemyGroup,VGenemyGroup;
var player, playerIMG;
var randX, randY;
var bg, bg2;
var score = 0;

function preload(){
  bg2 = loadImage("Img/BG.png");
  enemyIMG = loadImage("Img/enemy.png");
  BenemyIMG = loadImage("Img/Benemy.png");
  VGenemyIMG = loadImage("Img/VGenemy.png");
  GenemyIMG = loadImage("Img/Genemy.png");
  playerIMG = loadImage("Img/Player.png");
}

function setup() {
  createCanvas(displayWidth-10,displayHeight-140);
  engine = Engine.create();
  world = engine.world;
  enemyGroup = new Group();
  BenemyGroup = new Group();
  GenemyGroup = new Group();
  VGenemyGroup = new Group();
  

  player = createSprite(500,500,100,100);
  player.addImage(playerIMG);
  bg = createSprite(950,550,displayWidth,displayHeight);
  bg.addImage(bg2);
}

function draw() {
  background(255,255,255);  

  
  if(frameCount %60 === 0){
  randX = Math.round(random(50,displayWidth-60))
  randY = Math.round(random(50,displayHeight-190))
  enemy = createSprite(randX,randY,50,50);
  enemy.addImage(enemyIMG);
  enemyGroup.add(enemy);
  enemyGroup.setLifetimeEach(25);
  }
  
  if(frameCount %150 === 0){
    randX = Math.round(random(50,displayWidth-60))
    randY = Math.round(random(50,displayHeight-190))
    Genemy = createSprite(randX,randY,50,50);
    Genemy.addImage(GenemyIMG);
    Genemy.scale = 0.75
    GenemyGroup.add(Genemy);
    GenemyGroup.setLifetimeEach(20);
    }

    if(frameCount %80 === 0){
      randX = Math.round(random(50,displayWidth-60))
      randY = Math.round(random(50,displayHeight-190))
      Benemy = createSprite(randX,randY,50,50);
      Benemy.addImage(BenemyIMG);
      Benemy.scale = 0.5
      BenemyGroup.add(Benemy);
      BenemyGroup.setLifetimeEach(20);
      }
      
      if(frameCount %270 === 0){
        randX = Math.round(random(50,displayWidth-60))
        randY = Math.round(random(50,displayHeight-190))
        VGenemy = createSprite(randX,randY,50,50);
        VGenemy.addImage(VGenemyIMG);
        VGenemy.scale = 0.75
        VGenemyGroup.add(VGenemy);
        VGenemyGroup.setLifetimeEach(25);
        }
        
  points();
  Engine.update(engine);
  drawSprites();
}

function points(){
  if(mousePressedOver(enemyGroup)){
    score1();

  }
  if(mousePressedOver(GenemyGroup)){
    score1();
  }
  if(mousePressedOver(VGenemyGroup)){
    score1();

  }
  if(mousePressedOver(BenemyGroup)){
    score1();
    
  }
  
}

function score1(){
  score = score + 1
  console.log(score );
}