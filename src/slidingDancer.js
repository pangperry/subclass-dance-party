var SlidingDancer = class SlidingDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.stepPosition = 0;
    
  }

  step() {
    if (!this.pause) {
      this.stepPosition ++;
      super.step();
      if (this.stepPosition >= 0) {
        if (this.stepPosition % 4 === 0) {
          this.$node.animate({ 'left': '+=60px' }, 250 );
        } else if (this.stepPosition % 4 === 1) {
          this.$node.animate({ 'top': '+=60px' }, 250 );
        } else if (this.stepPosition % 4 === 2) {
          this.$node.animate({ 'left': '-=60px' }, 250 );
        } else {
          this.$node.animate({ 'top': '-=60px' }, 250 );    
        }
      }
    }
  } 
};