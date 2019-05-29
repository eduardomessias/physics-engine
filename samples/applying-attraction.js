let yellowBall,
    blueBall;

function setup() {
  createCanvas(400, 400);

  setupYellowBall();
  setupBlueBall();
}

function draw() {
  background(0);

  let attraction = blueBall.attract(yellowBall);
  yellowBall.applyForce(attraction);
  
  drawYellowBall();
  drawBlueBall();  
}

function setupYellowBall() {
  yellowBall = new Ball();
  yellowBall.mass = 1;
  yellowBall.radius = 20;
  yellowBall.location.x = width / 2 - 100;
  yellowBall.location.y = 100;
  yellowBall.velocity.x = 0.5;
  yellowBall.color = "#ffeaa7";
}

function setupBlueBall() {
  blueBall = new Ball();
  blueBall.mass = 2;
  blueBall.radius = 40;
  blueBall.location.x = width / 2;
  blueBall.location.y = height / 2;  
  blueBall.color = "#74b9ff";
  blueBall.gravity = 1;
}

function drawYellowBall() {
  yellowBall.display();
  yellowBall.applyPhysics();
}

function drawBlueBall() {
  blueBall.display("#74b9ff");
  blueBall.applyPhysics();    
}
