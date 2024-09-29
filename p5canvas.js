let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function draw(){
  background(255);
  drawMultipleRect();
}

function drawMultipleRect(){
  let startX, startY = 50;
    for(var i = 0; i < 8; i++){
    var y = 130 * i;
      for(var j = 0; j < 15; j++){
      var x = 130 * j;
      push();
      translate(startY + x, startY + y)//moves the point of origin
      rotate(angle);
      rectMode(CENTER);
      // fill(color(247, 37, 133));
      // noStroke();
      strokeWeight(1);
      stroke(150);
      rect(0,0,8,120);
      // rect(15,0,10,100);
      // rect(30,0,10,100);
      pop();

      angle = mouseX / 6 + mouseY / 6;
      }
  }
}
