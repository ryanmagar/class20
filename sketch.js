var fixedrect,movingrect;

function setup() {
  createCanvas(1200,800);
   fixedrect=createSprite(600, 400, 50, 80);
   fixedrect.shapeColor="green";

   movingrect=createSprite(800,300,20,90);
   movingrect.shapeColor="green";
}

function draw() {
  background("black");  
  movingrect.x=mouseX;
movingrect.y=mouseY;

if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  &&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2
  &&movingrect.y-fixedrect.y<movingrect.width/2+fixedrect.width/2
  &&fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
   else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
   }

  drawSprites();
}