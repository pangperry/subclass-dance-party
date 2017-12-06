var lineUp = function() {

  var columns = 5;
  var rows = Math.ceil(dancers.length) / columns;

  var rowSpace = ($('body').width() - 10) / columns;
  var colSpace = ($('body').height() - 10) / rows;

  var xPos = 5;
  var yPos = 5;

  for (var i = 0; i < dancers.length; i++) {
    dancers[i].setPosition(yPos, xPos);
//    dancers[i].paused = true;
    dancers[i].pauseToggle();
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
    dancers[i].pauseToggle();

  }
};



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
