let yellowBall,
    blueBall;

function setup() {
  createCanvas(400, 400);

  setupYellowBall();
  setupBlueBall();
}

function draw() {
  background(0);

  drawYellowBall();
  drawBlueBall();
}

function applyFriction(ball) {
  let friction = ball.velocity.copy();
  
  friction.normalize();
  friction.mult(-0.01);
  
  ball.applyForce(friction);
}

function setupYellowBall() {
  yellowBall = new PhysicBody();
  yellowBall.mass = 1;
  yellowBall.location.x = width / 2;
}

function setupBlueBall() {
  blueBall = new PhysicBody();
  blueBall.mass = 2;
  blueBall.location.x = width / 2 + 40;
}

function drawYellowBall() {
  yellowBall.displayEllipse("#ffeaa7");
  yellowBall.applyPhysics();
  yellowBall.fixDirection();

  yellowBall.applyGravity(0.981);
}

function drawBlueBall() {
  blueBall.displayEllipse("#74b9ff");
  blueBall.applyPhysics();
  blueBall.fixDirection();

  blueBall.applyGravity(0.981);
}
