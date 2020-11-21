var platform;



function setup() {
  createCanvas(800,400);
    createSprite(400, 200, 50, 50);
    platform = new Ground(200, 330, 150, 20);
}

function draw() {
    background(255, 255, 255);  
    platform.display();
  drawSprites();
}