const five = require("johnny-five");
const Tessel = require("tessel-io");
const board = new five.Board({
    io: new Tessel()
  });


board.on("ready", function() {
    const led = new five.Led('b6');

    const servo = new five.Servo({
        pin: 'a6', 
        type: "continuous"
    });

    // Clockwise, top speed.
    // servo.cw(0);
    // led.blink();
    setInterval(() => {
        led.stop();
        servo.cw(1);

        setTimeout(()=> {
            servo.stop();
            led.on();
        }, 1000)
    }, 2000)

    // Set the horn to 90degrees
    // servo.to(90);

    // Angle change takes 500ms to complete
    // servo.to(90, 500);

    // Angle change takes 500ms to complete over 10 steps
    // servo.to(90, 500, 10);
});