var five = require("johnny-five");
var board = new five.Board();

board.on('ready', function() {
  console.log('board is ready');
  this.pinMode(2, five.Pin.INPUT);
  this.pinMode(3, five.Pin.INPUT);

  this.digitalRead(2, function (value) {
    if (value === 1) {
      console.log('medium');
    } else {
      console.log('high');
    }
  });

  this.digitalRead(3, function (value) {
    if (value === 1) {
      console.log('high');
    }
  });
});