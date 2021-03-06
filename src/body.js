/**
 * Physic body
 * Represents a body susceptible to the physical laws.
 */
class Body {
  constructor() {

    this.location = createVector(0, 0);
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);

    this.mass = 0;
    this.gravity = 0;
  }

  /**
  *  Add mass to the current body's mass.
  *  @param  {Number}  mass  The mass that needs to be added
  */
  applyMass(mass) {
    this.mass += mass;
  }

  /**
  *  Add relative location to the current location.
  *  The body location will be relativity increased by the pointed location in the x an y axis.
  *  @param  {p5.Vector}  location  The location to be added
  */
  applyLocation(location) {
    this.location.add(location);
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