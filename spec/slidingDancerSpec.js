describe('slidingDancer', function() {

  var slidingDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slidingDancer = new SlidingDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slidingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that moves it 1/4 around a square', function() {
    var startY = slidingDancer.$node.css('top');
    var startX = slidingDancer.$node.css('left');

    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);

    expect(slidingDancer.$node.css('top')).to.not.equal(startY);
    expect(slidingDancer.$node.css('left')).to.not.equal(startX);

    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    
    expect(slidingDancer.$node.css('top')).to.equal(startY);
    expect(slidingDancer.$node.css('left')).to.equal(startX);

  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slidingDancer, 'step');
      expect(slidingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(slidingDancer.step.callCount > 0).to.be.true;

      clock.tick(timeBetweenSteps);
      expect(slidingDancer.step.callCount > 1).to.be.true;
    });
  });
});
