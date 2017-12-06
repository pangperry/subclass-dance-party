describe('rotatingLeftDancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new RotatingLeftDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a have the css class leftToggle', function() {
    expect(dancer.$node.hasClass('leftToggle')).to.be.true;
  });

  it('should be able to toggle leftToggle', function() {
    dancer.pauseToggle();
    expect(dancer.$node.hasClass('leftToggle')).to.be.false;
  });

});
