function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0);
  ellipse(frameCount % width, height/2, 10, 10);
}
