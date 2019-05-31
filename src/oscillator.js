class Oscillator {
    constructor() {
      this.amplitude = 300.0;
      this.angle = 0.0;
      this.oscillationLine = null;
      this.translation = createVector(width / 2, height / 2);
    }
    
    oscillate() {
      return this.amplitude * sin(this.angle);
    }
    
    draw() {
      translate(this.translation.x, this.translation.y);
        
      if (this.oscillationLine) {
        this.oscillationLine.destiny.x = this.oscillate();
        this.oscillationLine.draw();
      }    
    }
  }