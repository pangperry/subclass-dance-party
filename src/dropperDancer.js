var DropperDancer = class DropperDancer extends Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.stepPosition = 0;

  }

  step() {
    var top = this.$node.css('top')
    var left = this.$node.css('left');
    this.stepPosition ++;
    super.step();

    if (this.stepPosition % 4 === 0) {

      var dancer = new SlidingDancer(top, left, 1000)
      $('body').append(dancer.$node);
      window.dancers.push(dancer);

    } else if (this.stepPosition % 4 === 1) {
      var dancer = new SlidingDancer(top, left, 1000)
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    } else if (this.stepPosition % 4 === 2) {
      var dancer = new SlidingDancer(top, left, 1000)
      $('body').append(dancer.$node);
      window.dancers.push(dancer);
    } else {
      this.$node.animate({ 'left': '+=30px' }, 250 );
    }

  }

  pause() {
    this.stepPosition = -1
  }
  resume() {
    this.stepPosition = 0
    this.step();
  }
};
