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