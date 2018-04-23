// CODE FOR PUCK.JS
//LAST EDIT: APR 21 2018
//ANM

// The device to connect to
const device = '34:36:3b:79:eb:9b';

// Hardcoded alphabet to morse code dictionary
const alphabet = {
    "-----": "0",
    ".----" : "1",
    "..---" : "2",
    "...--" : "3",
    "....-" : "4",
    "....." : "5",
    "-...." : "6",
    "--..." : "7",
    "---.." : "8",
    "----." : "9",
    ".-"    : "a",
    "-..."  : "b",
    "-.-."  : "c",
    "-.."   : "d",
    "."     : "e",
    "..-."  : "f",
    "--."   : "g",
    "...."  : "h",
    ".."    : "i",
    ".---"  : "j",
    "-.-"   : "k",
    ".-.."  : "l",
    "--"    : "m",
    "-."    : "n",
    "---"   : "o",
    ".--."  : "p",
    "--.-"  : "q",
    ".-."   : "r",
    "..."   : "s",
    "-"     : "t",
    "..-"   : "u",
    "...-"  : "v",
    ".--"   : "w",
    "-..-"  : "x",
    "-.--"  : "y",
    "--.."  : "z"
};


// Variables
let holdTime = 0;
let started = false;
let combination = '';
let device;

function loadDevice() {
  NRF.requestDevice({
            filters: [{ id: device }]
        }).then((d) => {
            d.on('gattserverdisconnected', function(reason) {
                device = undefined;
            });

            return d.gatt.connect();
        }).then((gatt) => {
            device = gatt;
            console.log('got device!');
            digitalPulse(LED2, 1, 500); // light green to show it worked
        }).catch(function(e) {
            console.log(e);
            digitalPulse(LED1, 1, 500); // light red if we had a problem
        });
}

function onDown() {
    holdTime = Date().ms;

    if (device === undefined) {
      loadDevice();
    }
}

function onUp() {
    // Calculate the difference from push to release
    const delta = Date().ms - holdTime;
    let seconds = delta/1000;

    // Log it for debug
    // console.log(seconds +' seconds pushed');

    // Cancel our LED
    LED1.write(false);

    // Check if it's a dot or a dash by hold time
    if(seconds >= 0.3){
        combination += '-';
    } else{
        combination += '.';
    }

    return lastHit(combination);
}

function lastHit(lastCombination) {
   setTimeout(() => {
        if (combination == lastCombination) {
            // Get the result
            result = alphabet[combination];

            // Wipe the combination ready for the next one
            combination = '';

            // Return the result
            return gotResult(result);
        }
   }, 2500);
}

function gotResult(letter) {
    console.log('Got result!');
    console.log('Result is: ' + letter);

    device.getPrimaryService('EC00').then(function(s) {
        return s.getCharacteristic('EC0E');
    }).then(function(c) {
        return c.writeValue(letter);
    });
}


setWatch(onDown, BTN, { repeat: true, debounce:50, edge: 'rising' });
setWatch(onUp, BTN, { repeat: true,debounce:50, edge: 'falling' });


loadDevice();