var SpinningDancer = class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node = $('<span class="spinningDancer"></span>');
    this.setPosition(top, left);
    this.stepPosition = 0;
    
  }

  step() {
    this.stepPosition ++;
    super.step();
    if (this.stepPosition >= 0) {
      if (this.stepPosition % 4 === 0) {
        this.$node.rotate(5);
      } else if (this.stepPosition % 4 === 1) {
        this.$node.rotate(5);
      } else if (this.stepPosition % 4 === 2) {
        this.$node.rotate(5);
      } else {
        this.$node.rotate(5);
      }
    }
  }
};