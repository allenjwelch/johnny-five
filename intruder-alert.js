var twilio = require("twilio");
var Tessel = require("tessel-io");
var five = require("johnny-five");
var CONFIG = require('./config.json');
var board = new five.Board({
  io: new Tessel()
});

var accountSid = CONFIG.twilio.accountSid; // SID copied from www.twilio.com/console
var authToken = CONFIG.twilio.authToken; // token copied from www.twilio.com/console

var sender = CONFIG.twilio.senderNumber; // This is your Twilio phone number
var recipient = CONFIG.twilio.recepientNumber; // This is your own mobile phone number

var client = new twilio(accountSid, authToken);

board.on("ready", () => {
  var door = new five.Switch({
    pin: "a2",
    invert: true,
  });

  var led = new five.Led("a5");


  door.on("open", () => {
    led.on()

    console.log('sending message to ', CONFIG.twilio.recepientNumber)

    var details = {
      body: `Security Breach detect by Bishop`,
      from: sender,
      to: recipient,
    };

    client.messages.create(details, error => {
      if (error) {
        console.error(error.message);
      }
      // Success! Nothing else to do
    });
  });

  door.on("close", () => led.off());
});
