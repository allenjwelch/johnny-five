const { Board, Fn, Led, Light, Servo } = require("johnny-five");
const Tessel = require("tessel-io");
const board = new Board({
    io: new Tessel()
  });


board.on("ready", () => {
    const lightSensor = new Light('a7');
    const ledWarn = new Led('b5');
    const ledDispense = new Led('b6');
    const servo = new Servo({
        pin: 'a6',
        type: 'continuous'
    });

    const minDeg = 90;
    const maxDeg = 180;
    let dimmest = 1023;
    let brightest = 0;

    // ledDispense.on()
    servo.cw(1);

    lightSensor.on("change", () => {
        let relativeValue;
        if (lightSensor.value < dimmest) {
            dimmest = lightSensor.value;
        }
        if (lightSensor.value > brightest) {
            brightest = lightSensor.value;
        }
        relativeValue = Fn.scale(lightSensor.value, dimmest, brightest, 0, 511);
        if (relativeValue <= 255) {
            ledWarn.brightness(255 - relativeValue);
            //  servo.cw(0);
            // console.log('warning');
        } else {
            ledWarn.off();
            // servo.stop();
            // console.log('off');
        }
    });

  // Servo alternate constructor with options
  /*
  var servo = new five.Servo({
    id: "MyServo",     // User defined id
    pin: 10,           // Which pin is it attached to?
    type: "standard",  // Default: "standard". Use "continuous" for continuous rotation servos
    range: [0,180],    // Default: 0-180
    fps: 100,          // Used to calculate rate of movement between positions
    invert: false,     // Invert all specified positions
    startAt: 90,       // Immediately move to a degree
    center: true,      // overrides startAt if true and moves the servo to the center of the range
  });
  */

  // Add servo to REPL (optional)
//   board.repl.inject({
//     servo
//   });

});
