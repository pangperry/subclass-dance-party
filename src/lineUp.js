var lineUp = function() {

  var columns = 5;
  var rows = Math.ceil(dancers.length) / columns;

  var rowSpace = ($('body').width() - 10) / columns;
  var colSpace = ($('body').height() - 10) / rows;

  var xPos = 100;
  var yPos = 100;

  for (var i = 0; i < dancers.length; i++) {
    dancers[i].setPosition(yPos, xPos);
//    dancers[i].paused = true;
//    dancers[i].pauseToggle();
    xPos += rowSpace;
    if (i % columns === 1) {
      xPos = 5;
      yPos += colSpace;
    }
  }

};


var lineUpCircle = function() {

  var centerX = $('body').height() / 2;
  var centerY = $('body').width() / 2;

  var radius = Math.min(centerX, centerY) - 250;

  // var columns = 5;
  // var rows = Math.ceil(dancers.length) / columns;

  // var rowSpace = ($('body').width() - 10) / columns;
  // var colSpace = ($('body').height() - 10) / rows;

  
  for (var i = 0; i < dancers.length; i++) {  
    var xPos = centerX + radius * Math.sin(2 * Math.PI * i / dancers.length);
    var yPos = centerY + radius * Math.cos(2 * Math.PI * i / dancers.length);

    dancers[i].resetPosition(yPos, xPos, {'border-color': 'pink'});

  }
};

var lineUpCircleTwist = function() {

  var centerX = $('body').height() / 2;
  var centerY = $('body').width() / 2;

  var radius = Math.min(centerX, centerY) - 250;

  // var columns = 5;
  // var rows = Math.ceil(dancers.length) / columns;

  // var rowSpace = ($('body').width() - 10) / columns;
  // var colSpace = ($('body').height() - 10) / rows;


  dancers = dancers.slice(1).concat(dancers[0]);

  for (var i = 0; i < dancers.length; i++) {  
    var xPos = centerX + radius * Math.sin(2 * Math.PI * i / dancers.length);
    var yPos = centerY + radius * Math.cos(2 * Math.PI * i / dancers.length);

    dancers[i].resetPosition(yPos, xPos);

  }
};

window.twisting = false;
var doTheTwist = function() {
  if (!window.twisting) {
    lineUpCircleTwist();
    window.twisting = true;
    window.timer = setInterval(lineUpCircleTwist, 1000);
  } else {
    clearInterval(window.timer);
    window.twisting = false;
  }
};

// var undoTheTwist = function() {
//   clearInterval(window.timer);
// };

var lineUpCircles = function(n) {

  var centerX = $('body').height() / 2;
  var centerY = $('body').width() / 2;

  var radius = Math.min(centerX, centerY) - 10;
  var radiusStep = radius / n;


  
  for (var i = 0; i < dancers.length; i++) {  
    var xPos = centerX + radius * Math.sin(2 * Math.PI * i / dancers.length);
    var yPos = centerY + radius * Math.cos(2 * Math.PI * i / dancers.length);

    dancers[i].resetPosition(yPos, xPos, {'border-color': 'pink'});

  }
};
