var garden,rabbit,apple,orangeleaf,redleaf;
var gardenImg,rabbitImg,appleImg,orangeleafImg,redleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeleaf.png")
  redleafImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit.
rabbit = createSprite(200,400,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
rabbit.velocityX = 5;

}

    

function draw() {
  background(0);

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.random(random(1,3));

  if (frameCount % 80 === 0){
     if(select_sprites == 1){
      createapple();
     } else if (select_sprites == 2){
       createorangeleaf();
     } else{
      createredleaf();
     }    
rabbit.x = World.mouseX;
}

  }


//creating redleaf
redleaf = createSprite(random(20,300), 20, 10, 10);
redleaf.addImage(redleafImg);
redleaf.scale=0.6;
redleaf.velocityY = 3;
redleaf.lifetime = 170;
 
//creating apple   
  apple = createSprite(random(40, 300), 20, 10, 10);
  apple.addImage(appleImg);
  applle.scale=0.7;
  apple.velocityY = 3;
  apple.lifetime = 150;

function createredleaf(){
  orangeleaf = createSprite(random(60,300), 20, 10, 10);
  orangeleaf.addImage(orangeleafImg);
  orangeleaf.scale=0.1;
  orangeleaf.velocityY = 3;
  orangeleaf.lifetime = 160;
  }
 














