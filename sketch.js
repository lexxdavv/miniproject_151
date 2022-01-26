function setup() {
    createCanvas(windowWidth, windowHeight);

  }
  






  function draw() {
    background(230);
  
   strokeWeight(1);
  stroke(255,0,0);
    fill(250,0,0);
    
  
    line(95,0,105,775);
    stroke(240);
  strokeWeight(20);
  
  
  circle(100, 300, 100);
  square(230, 220, 90);
    stroke(400);
    strokeWeight(20);
    line(190,0,190,705);
  
    
     line(275,0,275,775);
    stroke(0);
  strokeWeight(0);
    
    
  
  fill(250, 0, 0);
  noStroke();
  beginShape();
  vertex(0, 35);
  vertex(35, 0);
  vertex(0, -35);
  vertex(-35, 0);
  endShape();
    
  
  fill(250, 0, 0);
  noStroke();
  beginShape();
  vertex(20, 50);
  vertex(53, 60);
  vertex(50, -10);
  vertex(-5, 100);
  endShape();
  
  
  }