class Box extends PhysicBody {
  constructor() {
    super();

    this.color = 127;
    this.borderColor = 255;
    this.borderWeight = 2;
    this.alpha = 99;
    this.width = 20;
    this.height = 10;
    this.mode = CENTER;
    this.translate = {
      x: width / 2,
      y: height / 2
    }
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
    
    translate(this.translate.x, this.translate.y);
    rotate(this.rotation);

    rect(this.location.x, this.location.y, this.width, this.height);
    pop();
  }
}
