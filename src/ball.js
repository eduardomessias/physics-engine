class Ball extends PhysicBody {
  constructor() {
    super();

    this.color = 127;
    this.borderColor = 255;
    this.borderWeight = 2;
    this.alpha = 90;
    this.radius = createVector(20, 20);
  }

  display() {
    push();
    stroke(this.borderColor);
    strokeWeight(this.borderWeight);

    let ellipseColor = color(this.color);
    ellipseColor.setAlpha(this.alpha);

    fill(ellipseColor);
    
    ellipse(this.location.x, this.location.y, this.radius, this.radius);
    pop();
  }
}
