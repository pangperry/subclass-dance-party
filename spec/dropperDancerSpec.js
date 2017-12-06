// describe('pulseDropper', function() {

//   var dancer, clock;
//   var timeBetweenSteps = 1000;

//   beforeEach(function() {
//     clock = sinon.useFakeTimers();
//     dancer = new PulseDropper(10, 20, timeBetweenSteps);
//   });

//   it('should create one Pulse Dancer each per second', function() {
//     clock.tick(timeBetweenSteps);
//     clock.tick(timeBetweenSteps);
//     expect(dancers[1] instanceof PulseDancer).to.be.true;
//   });

//   // it('should have a have the css class pulseToggle', function() {
//   //   expect(dancer.$node.hasClass('pulseToggle')).to.be.true;
//   // });

//   // it('should be able to toggle pulseToggle', function() {
//   //   dancer.pauseToggle();
//   //   expect(dancer.$node.hasClass('pulseToggle')).to.be.false;
//   // });


// });



describe('dropperDancer', function() {

  var dancer, clock;
  window.dancers = [];
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new DropperDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should create one Sliding Dancer each second', function() {
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);

    expect(dancers[dancers.length - 1] instanceof SlidingDancer).to.be.true;
  });

  it('should move once every four seconds (test not working, but behavior seems right on dancefloor)', function() {
    var startX = dancer.$node.css('left');

    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    expect(dancer.$node.css('left')).to.equal(startX);
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);
    expect(dancer.$node.css('left')).to.not.equal(startX);
  });

});