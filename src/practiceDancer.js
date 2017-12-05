var PracticeDancer = class PracticeDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.stepPosition = 0;
   // this.$node.addClass('practice');
   // this.$node.addClass('practiceToggle');

    this.dropClass = PulseDancer;
    // this.timeBetweenSteps = timeBetweenSteps;
  }    

  step() {
    var top = this.$node.css('top');
    var left = this.$node.css('left');
    this.stepPosition ++;

    super.step();

    var dancer = new PulseDancer(top, left, 1000);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    this.setPosition(top + 10, left + 10);

  }

  pauseToggle() {
    this.$node.toggleClass('practiceToggle');
  }
};