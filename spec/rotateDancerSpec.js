describe('rotateDancer', function() {

  var dancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new RotateDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a have the css class rotateToggle', function() {
    expect(dancer.$node.hasClass('rotateToggle')).to.be.true;
  });

  it('should be able to toggle rotateToggle', function() {
    dancer.pauseToggle();
    expect(dancer.$node.hasClass('rotateToggle')).to.be.false;
  });

});
