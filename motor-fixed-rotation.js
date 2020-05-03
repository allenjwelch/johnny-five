var five = require("johnny-five");
var Tessel = require("tessel-io");
var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  var motor = new five.Motor({
    pins: {
      pwm: "a5",
      dir: "a4",
      brake: "a5"
    }
  });
  motor.on("forward", function(err) {
      try {
        board.wait(1000, function() {
        motor.stop();
        });
      } catch (err) {
        console.error(err);
      }
  });

  motor.forward(32);
});
