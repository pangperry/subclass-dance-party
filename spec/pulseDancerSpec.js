describe('pulseDancer', function() {

  var pulseDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pulseDancer = new PulseDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pulseDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a have the css class pulseToggle', function() {
    expect(pulseDancer.$node.hasClass('pulseToggle')).to.be.true;
  });

  it('should be able to toggle pulseToggle', function() {
    pulseDancer.pauseToggle();
    expect(pulseDancer.$node.hasClass('pulseToggle')).to.be.false;
  });

});
