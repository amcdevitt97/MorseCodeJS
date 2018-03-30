// CODE FOR PUCK.JS
//LAST EDIT: MAR 28 2018
//ANM

var downTime = 0;
var deadAirTime = 0;
var started=false;
var letter='';
var alphabet = {
   "-----":"0",
   ".----":"1",
   "..---":"2",
   "...--":"3",
   "....-":"4",
   ".....":"5",
   "-....":"6",
   "--...":"7",
   "---..":"8",
   "----.":"9",
   ".-":"a",
   "-...":"b",
   "-.-.":"c",
   "-..":"d",
   ".":"e",
   "..-.":"f",
   "--.":"g",
   "....":"h",
   "..":"i",
   ".---":"j",
   "-.-":"k",
   ".-..":"l",
   "--":"m",
   "-.":"n",
   "---":"o",
   ".--.":"p",
   "--.-":"q",
   ".-.":"r",
   "...":"s",
   "-":"t",
   "..-":"u",
   "...-":"v",
   ".--":"w",
   "-..-":"x",
   "-.--":"y",
   "--..":"z",
   "/":" ",
   "-·-·--":"!",
   "·-·-·-":".",
   "--··--":","
};

function onUp() {
  if(started===true){
    deadAirTime = Date().ms;
  }
  const delta = Date().ms - downTime;
  var seconds = delta/1000;
  //console.log(seconds+' seconds pushed');
  LED1.write(false);
  //console.log('light is off');
  if(seconds>=0.3){
    //console.log('dash');
    letter+='-';
  }
  else{
    //console.log('dot');
    letter+='.';
  }
}

function onDown() {
  started=true;
  // NRF is bluetooth chip used on puck.js
  /*NRF.requestDevice({ filters: [{ namePrefix: 'Puck.js' }]   }).then(function(device) {
    return require("ble_uart").connect(device);
    }).then(function(uart) {
      uart.write("led:on\n"); // .then(...)
      setTimeout(function() {
        uart.disconnect();
        console.log("Disconnected");
      }, 2000);
  });*/
  downTime = Date().ms;
  const delta = Date().ms - deadAirTime;
  var seconds = delta/1000;
  //console.log(seconds+' seconds NOT pushed');
  if(seconds>=2){
    console.log(alphabet[letter]);
    letter="";
  }
  LED1.write(true);
  //console.log('light is on');
}



onDown();
onUp();

setWatch(onDown, BTN, { repeat: true, debounce:50, edge: 'rising' });

setWatch(onUp, BTN, { repeat: true,debounce:50, edge: 'falling' });