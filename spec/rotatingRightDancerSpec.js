describe('rotatingLeftDancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new RotatingRightDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a have the css class rightToggle', function() {
    expect(dancer.$node.hasClass('rightToggle')).to.be.true;
  });

  it('should be able to toggle rightToggle', function() {
    dancer.pauseToggle();
    expect(dancer.$node.hasClass('rightToggle')).to.be.false;
  });

});
