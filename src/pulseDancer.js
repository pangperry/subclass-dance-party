var PulseDancer = class PulseDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.stepPosition = 0;
    this.$node.addClass('pulse');
    this.$node.addClass('pulseToggle');

  }    

  // step() {
  //   super.step();
  // }

  pauseToggle() {
    this.$node.toggleClass('pulseToggle');
  }
};


