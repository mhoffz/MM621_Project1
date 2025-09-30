let ballX;
let ballY;
let ballXSpeed = 1.7;
let ballYSpeed = 1;
let ballSize;
let myStroke = 255;
let bgR;
let bgG;
let bgB;
let ballR;
let ballG;
let ballB;


function setup() {
  createCanvas(500, 500);
  
  ballX = random(width);
  ballY = random(height);
  strokeWeight(2);
  bgR = random(255);
  bgG = random(255);
  bgB = random(255);
  ballR = random(255);
  ballG = random(255);
  ballB = random(255);
  ballSize = 50;
}

function draw() {
  //background(130, 203, 203, 3);
  background(bgR, bgG, bgB, 2);

  stroke(myStroke, 2);

  //squares
  for (let ix = 0; ix < width; ix += 50){
    for (let iy = 0; iy < height; iy += 50){
      fill(random(255),random(255),random(255), .1);
      rect(ix, iy, ballSize);
    }
  }

  stroke(myStroke);
  fill(ballR, ballG, ballB);

  //the ball
  ellipse(ballX, ballY, ballSize);

  //lines that react to mouse
  stroke(random(255), random ( 100), random (255), 20);
  line(mouseX, 0, 0, mouseY);
  stroke(random(255), random ( 100), random (255), 20);
  line(height, width - mouseX, height - mouseY, width);
  stroke(random(255), random ( 100), random (255), 20);
  line( 0,mouseX, mouseY, 0,);
  stroke(random(255), random ( 100), random (255), 20);
  line(width - mouseX, height, width, height - mouseY );

  //draw a new ball
  if (mouseX >= (ballX - 35) && mouseX <= (ballX + 35)){
    if (mouseY >= (ballY - 35) && mouseY <= (ballY + 35)){
      let s = random(1);
      if (s<=.5){
        myStroke = 0;
      } else{
        myStroke = 255;
      }
      fill (random(255),random(255),random(255));
      ballX = random(width);
      ballY = random(height);
      ballSize = randomGaussian(90, 80);
      ballR = random(255);
      ballG = random(255);
      ballB = random(255);
    }
  }

  //move the ball
  ballX += ballXSpeed;
  if (ballX >= width || ballX <= 0){
    ballXSpeed = ballXSpeed*-1;
  }
  
  ballY += ballYSpeed;
  if (ballY >= height || ballY <= 0){
    ballYSpeed = ballYSpeed*-1;
  }

  
}


//Change ball direction
  function mousePressed(){
 
    if (ballXSpeed == 1.7 || ballXSpeed == -1.7){
      ballYSpeed = ballXSpeed;
      ballXSpeed = 0;
    } else if(ballXSpeed == 0){
      ballXSpeed = 1.7;
    } else if (ballYSpeed == 1 || ballYSpeed == -1){
      ballXSpeed = ballYSpeed;
      ballYSpeed = 0;
    } else if (ballYSpeed == 0){
      ballYSpeed = 1;
    }
    bgR = random(255);
    bgG = random(255);
    bgB = random(255);
  }