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

function setupYellowBall() {
  yellowBall = new Ellipse();
  yellowBall.mass = 1;
  yellowBall.radius = 20;
  yellowBall.location.x = width / 2;
  yellowBall.color = "#ffeaa7";
}

function setupBlueBall() {
  blueBall = new Ellipse();
  blueBall.mass = 2;
  blueBall.radius = 40;
  blueBall.location.x = width / 2 + 40;
  blueBall.color = "#74b9ff";
}

function drawYellowBall() {
  yellowBall.display();
  yellowBall.applyPhysics();
  yellowBall.fixDirection();

  yellowBall.applyGravity(0.981);
}

function drawBlueBall() {
  blueBall.display();
  blueBall.applyPhysics();
  blueBall.fixDirection();

  blueBall.applyGravity(0.981);
}
