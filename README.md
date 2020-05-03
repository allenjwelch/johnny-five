# Johnny-Five Experiments
[Johnny-Five Documentation](http://johnny-five.io/)
[Experiement Guide](https://learn.sparkfun.com/tutorials/experiment-guide-for-the-johnny-five-inventors-kit/introduction-to-the-johnny-five-inventors-kit)

### Setup
npm install johnny-five tessel-io

npm install t2-cli -g
t2 list
t2 rename [name]
t2 wifi -n [SSID] -p [password]
t2 provision
t2 update

### Running:
t2 run <file.js>
t2 run <file.js> ‐‐single
/* The --single flag tells the T2 CLI to only deploy the single, specified file. This will preserve all other existing code on the Tessel 2 while still deploying your new program changes, which can make the deployment faster. */

t2 push <file.js>
t2 erase

`led.js`
![basic led experiement](image.jpg)

`side-to-side.js`, `collision.js`, `one-by-one-on-off.js`, & `one-by-one-clear-reapeat.js`
![multiple led experiments](image.jpg)

`sensor-basic.js` & `sensor-input-to-output.js`
![analog sensor experiement](image.jpg)

`button.js`
![button experiment](image.jpg)

`buttons-led.js`
![multiple buttons with leds experiement](image.jpg)

`switch.js`
![spdt switch experiement](image.jpg)

`interuder-alert.js`
![magnetic switch with SMS messaging](image.jpg)