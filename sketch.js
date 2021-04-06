function setup() {
  createCanvas(800,400);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  scAngle = map(sc,0, 60, 0, 360);
  mnAngle= map(mn,0, 60, 0, 360);
  hrAngle = map(hr,0, 12, 0, 360);
}

function draw() {
  background(0); 
  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,10,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,10,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,10,0);
  pop();

  drawSprites();
}