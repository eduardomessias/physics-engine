class Box extends PhysicBody {
  constructor() {
    super();

    this.color = 127;
    this.borderColor = 255;
    this.borderWeight = 2;
    this.alpha = 99;
    this.width = 20;
    this.height = 10;
  }
  
  display() {
    push();
    stroke(this.borderColor);
    strokeWeight(this.borderWeight);

    let rectColor = color(this.color);
    rectColor.setAlpha(this.alpha);

    fill(rectColor);

    rect(this.location.x, this.location.y, this.width, this.height);
    pop();
  }
}
