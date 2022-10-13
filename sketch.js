//create 4 var called as ground,lander,lander_img,bg_img
var  ground;
var lander;
var lander_img;
var bg_img;



//create and store the data in var.vx=0,g is 0.05,vy is 0
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  //load the image "normal.png" in the var lander_img\

    lander_img=loadImage ("normal.png");


 //load the image "bg.png" in the var bg_img
  bg_img=loadImage("bg.png");

}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  //create a sprite called as lander with values-(100,50,30,30)\
   lander = createSprite(100,50,30,30);


  //add the image
 lander.addImage(lander_img);


  // scale the image
   lander.scale = 0.1;

  rectMode (CENTER);
  textSize (15);

}

function draw() 
{

  background (51);
  image (bg_img,0,0);
  push ();
  fill (255);
  text ("vertical velocity: "+round(vy),800,75);
  pop ();


  //fall down
  vy +=g;
  lander.position.y+=vy;
  
  drawSprites();
}


