class Line {
    constructor() {
      this.origin = createVector(0, 0);
      this.destiny = createVector(0, 0);
      this.color = "#81ecec";
    }
    
    draw() {
      let lineColor = color(this.color);
      stroke(lineColor);
      
      line(this.origin.x, this.origin.y, this.destiny.x,this.destiny.y);
    }
  }