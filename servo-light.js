const { Board, Fn, Led, Light, Servo } = require("johnny-five");
const Tessel = require("tessel-io");
const board = new Board({
    io: new Tessel()
  });


board.on("ready", () => {
    const sensor = new Sensor('a7');
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

    const leds = ['a2', 'a3', 'a4'];

    console.log(leds);

    const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms))
    }

    const runLed = (led, index) => {
    if (index === leds.length - 1) {
        console.log(led, ' - blink');
    } else {
        console.log(led, ' - on');
    }
    return sleep(2000).then(v => console.log(led, ' - off'))
    }

    const forLoop = async _ => {
    console.log('Start')

    for (let index = 0; index < leds.length; index++) {
        const led = leds[index]
        await runLed(led, index);
    }

    await runServo();

    console.log('End')
    }

    const runServo = async () => {
    console.log('servo - ON')
    return sleep(2000).then(v => console.log('servo - OFF'))
    }

    forLoop();

    // ledDispense.on()
    // servo.cw(1);
    // setInterval(() => {
    //     sensor.stop();
    //     servo.cw(1);

    //     setTimeout(()=> {
    //         servo.stop();
    //         sensor.on("change", () => {
    //             let relativeValue;
    //             if (sensor.value < dimmest) {
    //                 dimmest = sensor.value;
    //             }
    //             if (sensor.value > brightest) {
    //                 brightest = sensor.value;
    //             }
    //             relativeValue = Fn.scale(sensor.value, dimmest, brightest, 0, 511);
    //             if (relativeValue <= 255) {
    //                 ledWarn.brightness(255 - relativeValue);
    //                 //  servo.cw(0);
    //                 // console.log('warning');
    //             } else {
    //                 ledWarn.off();
    //                 // servo.stop();
    //                 // console.log('off');
    //             }
    //         });
    //     }, 3000)
    // }, 6000)

    // sensor.on("change", () => {
    //     let relativeValue;
    //     if (sensor.value < dimmest) {
    //         dimmest = sensor.value;
    //     }
    //     if (sensor.value > brightest) {
    //         brightest = sensor.value;
    //     }
    //     relativeValue = Fn.scale(sensor.value, dimmest, brightest, 0, 511);
    //     if (relativeValue <= 255) {
    //         ledWarn.brightness(255 - relativeValue);
    //         //  servo.cw(0);
    //         // console.log('warning');
    //     } else {
    //         ledWarn.off();
    //         // servo.stop();
    //         // console.log('off');
    //     }
    // });

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
