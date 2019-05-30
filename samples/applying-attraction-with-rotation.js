let a = 0.0;
let aVelocity = 0.0;
let aAcceleration = 0.001;

let yellowBox,
    blueBall;

function setup() {
  createCanvas(400, 400);

  setupYellowBox();
  setupBlueBall();
}

function draw() {
  background(0);
  
  let attraction = blueBall.attract(yellowBox);
  yellowBox.applyForce(attraction);
  
  aAcceleration = yellowBox.acceleration.x / 10.0;    
  yellowBox.rotation = a;
  
  drawYellowBox();
  drawBlueBall();  
}

function setupYellowBox() {
  yellowBox = new Box();
  yellowBox.color = "#ffeaa7";
  yellowBox.mass = 1;
  yellowBox.translation.x = width / 2 - 100;
  yellowBox.translation.y = 100;
  yellowBox.velocity.x = 0.1;
}

function setupBlueBall() {
  blueBall = new Ball();
  blueBall.color = "#74b9ff";
  blueBall.mass = 4;
  blueBall.location.x = width / 2;
  blueBall.location.y = height / 2;  
  blueBall.gravity = 1;
}

function drawYellowBox() {
  yellowBox.translation = yellowBox.location.copy();
  
  a += aVelocity;
  aVelocity += aAcceleration;
  
  yellowBox.resetLocation(); 
  yellowBox.display();
  yellowBox.location = yellowBox.translation.copy();
  yellowBox.applyPhysics();
}

function drawBlueBall() {
  blueBall.display();
  blueBall.applyPhysics();
}