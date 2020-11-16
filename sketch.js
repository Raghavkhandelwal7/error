var ground;
function setup() {
  createCanvas(800,400);
  
  ground=new Ground(500,102,20,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
}