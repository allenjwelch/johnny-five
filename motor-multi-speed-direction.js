var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", function() {
  var spdt = new five.Switch("a7");
  var throttle = new five.Sensor("b7");
  var motors = new five.Motors([
    [ "a5", "a4", "a3" ],
    [ "b5", "b4", "b3" ],
  ]);
  var speed = 0;

  spdt.on("open", () => {
    motors.stop().forward(speed);
  });

  spdt.on("close", () => {
    motors.stop().reverse(speed);
  });

  throttle.on("change", () => {
    speed = throttle.value >> 2;
    motors.speed(speed);
  });
});
