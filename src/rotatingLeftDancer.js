var RotatingLeftDancer = class RotatingLeftDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.stepPosition = 0;
    this.$node.addClass('left');
    this.$node.addClass('leftToggle');
  }

  pauseToggle() {
    this.$node.toggleClass('leftToggle');
  }
};