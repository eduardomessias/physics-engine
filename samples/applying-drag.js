let yellowBall,
    blueBall;

let greeBox;

function setup() {
  createCanvas(400, 400);

  setupYellowBall();
  setupBlueBall();
  setupGreenBox();
}

function draw() {
  background(0);

  drawYellowBall();
  drawBlueBall();
  drawGreenBox();

  applyCollisions();
}

function drag(ball) {
  let drag = ball.velocity.copy();
  let speed = ball.velocity.magSq();

  drag.normalize();
  drag.mult(-0.06 * speed);
  
  ball.applyForce(drag);
}

function applyCollisions() {
  if (yellowBall.checkCollision(greenBox)) {
    drag(yellowBall);    
  }
  
  if (blueBall.checkCollision(greenBox)) {
    drag(blueBall);
  }
}

function setupYellowBall() {
  yellowBall = new Ball();
  yellowBall.mass = 1;
  yellowBall.radius = 20;
  yellowBall.location.x = width / 2;
}

function setupBlueBall() {
  blueBall = new Ball();
  blueBall.mass = 2;
  blueBall.radius = 40;
  blueBall.location.x = width / 2 + 40;
}

function setupGreenBox() {
  greenBox = new Box();
  greenBox.mass = 20;
  greenBox.width = 400;
  greenBox.height = 200;
  greenBox.location.y = height - 200;
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

function drawGreenBox() {
  greenBox.displayRect("#55efc4");
  greenBox.applyPhysics();
  greenBox.fixDirection();
}
