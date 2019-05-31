/**
 * Eduardo Messias, 31/05/2019
 */
class Ellipse extends Body {
  constructor() {
    super();

    this.color = 127;
    this.borderColor = 255;
    this.borderWeight = 2;
    this.alpha = 90;
    this.radius = createVector(20, 20);
    this.translation = createVector(width / 2, height / 2);
  }

  display() {
    push();
    translate(this.translation.x, this.translation.y);
    
    stroke(this.borderColor);
    strokeWeight(this.borderWeight);

    let ellipseColor = color(this.color);
    ellipseColor.setAlpha(this.alpha);

    fill(ellipseColor);
    
    ellipse(this.location.x, this.location.y, this.radius.x, this.radius.y);
    pop();
  }
}