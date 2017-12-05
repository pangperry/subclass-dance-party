var RotatingRightDancer = class RotatingRightDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.stepPosition = 0;
    this.$node.addClass('right');
    this.$node.addClass('rightToggle');
  }

  pauseToggle() {
    this.$node.toggleClass('rightToggle');
  }
};