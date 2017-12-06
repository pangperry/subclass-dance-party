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



describe('pulseDropper', function() {

  var dancer, clock;
  window.dancers = [];
  var timeBetweenSteps = 1000;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new PulseDropper(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(dancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should create one Pulse Dancer each second', function() {
    clock.tick(timeBetweenSteps);
    clock.tick(timeBetweenSteps);

    expect(dancers[1] instanceof PulseDancer).to.be.true;
  });

  it('Each new Pulse Dancer should be a different color', function() {
    color1 = dancers[dancers.length - 1].$node.css('border-color');
    clock.tick(timeBetweenSteps);
    color2 = dancers[dancers.length - 1].$node.css('border-color');
    expect(color1).to.not.equal(color2);

  });

});