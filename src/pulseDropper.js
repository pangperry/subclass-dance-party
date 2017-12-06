var PulseDropper = class PulseDropper extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.stepPosition = 0;
   // this.$node.addClass('practice');
   // this.$node.addClass('practiceToggle');

    //this.dropClass = PulseDancer;
    // this.timeBetweenSteps = timeBetweenSteps;
  }    

  step() {
    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    var top = this.$node.css('top');
    var left = this.$node.css('left');
    this.stepPosition ++;

    super.step();

    var dancer = new PulseDancer(top, left, 1000);
    dancer.$node.css({'border-color': colors[this.stepPosition % colors.length]});
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    this.$node.animate({ 'left': '+=40px' }, 250 );

  }

  // pauseToggle() {
  //   this.$node.toggleClass('practiceToggle');
  // }
};