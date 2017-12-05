var RotateDancer = class RotateDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.stepPosition = 0;
    this.$node.addClass('rotate');
    this.$node.addClass('rotateToggle');

  }    

  // step() {
  //   super.step();
  // }

  pauseToggle() {
    this.$node.toggleClass('rotateToggle');
  }
};
