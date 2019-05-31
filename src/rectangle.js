import { Body } from 'body.js';

/**
 * Eduardo Messias, 30/05/2019.
 * Box is an extension of the PhysicBody object.
 */
class Rectangle extends Body {
  constructor() {
    super();

    this.color = 127;
    this.borderColor = 255;
    this.borderWeight = 2;
    this.alpha = 99;
    this.width = 20;
    this.height = 10;
    this.mode = CENTER;
    this.translation = createVector(width / 2, height / 2);
    this.rotation = 0;
  }
  
  display() {
    push();
    rectMode(this.mode);
    
    stroke(this.borderColor);
    strokeWeight(this.borderWeight);

    let rectColor = color(this.color);
    rectColor.setAlpha(this.alpha);

    fill(rectColor);
    
    translate(this.translation.x, this.translation.y);
    rotate(this.rotation);

    rect(this.location.x, this.location.y, this.width, this.height);
    pop();
  }
  
  resetLocation() {
    this.location = createVector(0, 0);
  }
}
