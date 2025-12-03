let time = 0;
let speed = 0.006;
let season = "winter";

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  time = (time + speed) % 1;
  
  if (time < 0.25) {
    season = "winter";
  } else if (time < 0.5) {
    season = "spring";
  } else if (time < 0.75) {
    season = "summer";
  } else {
    season = "fall";
  }

  if (season == "winter") {
    background(200,220,240);
    fill(240); 
    rect(0,height-100,width,100);
    drawTree(color(180,210,200));
    
    //snow 
    fill(255);
    for (let i=0; i<30; i++){
    let x = random(width);
    let y = (random(height)+frameCount) % height;
      circle(x,y,4);
    }
  } 
  else if (season == "spring") {
    background(20,30,60);
    fill(60,150,70); 
    rect(0,height-100,width,100);
    drawTree(color(70,200,90));
    //rain
    stroke(90,160,255);
    for (let i=0; i<30; i++){
    let x = random(width);
    let y = (random(height)+frameCount) % height;
      circle(x,y,4);
    }
    noStroke();
  } 
  else if (season == "summer") {
    background(90,180,255);
    fill(40,130,50); 
    rect(0,height-100,width,100);
    drawTree(color(40,140,60));
    //sun 
    fill(255,220,0,200);
    circle(70, 60, 100 + sin(frameCount*0.2)*15);
  } 
  else { 
    // Fall
    background("rgb(225,170,129)");
    fill(170,120,60); 
    rect(0,height-100,width,100);
    drawTree(color(220,120,40));

    fill(220,140,40);
    for (let i=0; i<25; i++){
    let x = random(width);
    let y = (i*40 + frameCount*0.5) % height;
    ellipse(x, y, 12, 8);
  }
}
}

function drawTree(leafColor){
  fill(120,70,30);
  rect(width/2-20,height-220,40,160);
  fill(leafColor);
  push();
  translate(width/2,height-260);
  ellipse(0,0,200,150);
  ellipse(-60,30,120,90);
  ellipse(60,30,120,90);
  ellipse(0,-40,110,85);
  pop();
}

