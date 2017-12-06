// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };


class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.setPosition(top, left);
    this.isSynced = false;
    this.paused = false;
    //this.now = new Date();
    //this.seconds = this.now.getSeconds() % 4;
    this.step();
  }
  step() {
    if (!this.paused) {
      var context = this;
      if (!this.isSynced) {
        var now = new Date();
        setTimeout(function() {
          context.step();
        }, 1000 - now.getMilliseconds() );
      } else {
        setTimeout(function() {
          context.step();
        }, context.timeBetweenSteps);
      }

    }
  }
  
  setPosition(top, left, obj) {
    var styleSettings = {
      top: top,
      left: left
    };

    if (!this.$node.height()) {    

      this.$node.css(styleSettings);
      this.$node.css(obj || {});

    } else {
      this.$node.animate(styleSettings);
      this.$node.animate(obj || {});
    }



  }

  resetPosition(top, left, obj) {
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.animate(styleSettings);
    this.$node.animate(obj || {});

  }

  pauseToggle() {
    this.paused = !this.paused;
  }
}

