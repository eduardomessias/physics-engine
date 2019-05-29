class PhysicBody {
  constructor() {

    this.location = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.mass = 0;
    this.gravity = 0;
    
    this.width = 0;
    this.height = 0;
  }

  applyMass(mass) {
    this.mass += mass;
  }

  applyLocation(x, y) {
    this.location.x += x;
    this.location.y += y;
  }

  applyForce(force) {
    let appliedForce = force.copy();
    let appliedAcceleration = appliedForce.div(this.mass);

    this.acceleration.add(appliedAcceleration);
  }

  applyFriction(coefficient) {
    let friction = this.velocity.copy();
    friction.normalize();
    friction.mult(coefficient);

    this.applyForce(friction);
  }

  drag(coefficient) {
    let speed = this.velocity.mag();

    let drag = this.velocity.copy();

    drag.normalize();
    drag.mult(-1);
    drag.mult(coefficient * (speed * speed));

    this.applyForce(drag);
  }

  attract(mover) {
    let direction = p5.Vector.sub(this.location, mover.location);
    
    let d = direction.mag();
    d = constrain(d, 5.0, 25.0);
    
    direction.normalize();

    let strength = (1 * this.mass * mover.mass) / (d * d);
    direction.mult(strength);
    
    return direction;
  }

  applyPhysics() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.acceleration.mult(0);
  }

  applyGravity(coefficient) {
    let gravity = createVector(0, coefficient);
    gravity.mult(this.mass);

    this.applyForce(gravity);
  }

  displayEllipse(_color, borderColor) {
    push();
    stroke(borderColor || 255);
    strokeWeight(2);

    let ellipseColor = color(_color || 127);
    ellipseColor.setAlpha(90);

    fill(ellipseColor);
    
    this.width = this.mass * 20;
    this.height = this.mass * 20;
    
    ellipse(this.location.x, this.location.y, this.width, this.height);
    pop();
  }

  displayRect(_color, borderColor) {
    push();
    stroke(255);
    strokeWeight(2);

    let rectColor = color(_color);
    rectColor.setAlpha(99);

    fill(rectColor);
    
    this.width = this.mass * 20;
    this.height = this.mass * 10;
    
    rect(this.location.x, this.location.y, this.width, this.height);
    pop();
  }

  fixDirection() {
    if (this.location.x > width) {
      this.location.x = width;
      this.velocity.x *= -1;
    }

    if (this.location.x < 0) {
      this.location.x = 0;
      this.velocity.x *= -1;
    }

    if (this.location.y > height) {
      this.location.y = height;
      this.velocity.y *= -1;
    }

    if (this.location.y < 0) {
      this.location.y = 0;
      this.velocity.y *= -1;
    }
  }

  checkCollision(target) {
    return (this.location.x >= target.location.x && this.location.x <= target.location.x + target.width) &&
      (this.location.y >= target.location.y && this.location.y <= target.location.y + target.height);
  }
}
