let util = require('util');
// For Bluetooth
let bleno = require('bleno');
// For Arduino access
var five = require('johnny-five');
var board = new five.Board();

// Other vars
var letter='';
var a;
var b;
var c;
var d;
var e;
var f;
var g;
// Define our characteristic
let MainCharacteristic = function() {
    MainCharacteristic.super_.call(this, {
        uuid: 'ec0e',
        properties: ['write'],
        value: null
    });
};

// Inherit the main class
util.inherits(MainCharacteristic, bleno.Characteristic);


// Incoming data handler
MainCharacteristic.prototype.onWriteRequest = function(value, offset, withoutResponse, callback) {
    //resets letter displayed
    a.off();
  	b.off();
  	c.off();
  	d.off();
  	e.off();
  	f.off();
  	g.off();
    
    
    
    console.log('MainCharacteristic - onWriteRequest: value = ' + value);
	// Sets letter to value
	letter = value;
	//Various cases to display the letter on the seven-seg
	if(letter=='a'){
  			a.on();
  			b.on();
  			c.on();
  			e.on();
  			f.on();
  			g.on();
  	}
  	if(letter=='b'){
  			c.on();
  			d.on();
  			e.on();
  			f.on();
  			g.on();
  	}
  	if(letter=='c'){
  			a.on();
  			f.on();
  			e.on();
  			d.on();
  	}
  	if(letter=='d'){
  			b.on();
  			c.on();
  			d.on();
  			e.on();
  			g.on();
  	}
  	if(letter=='e'){
  			a.on();
  			f.on();
  			g.on();
  			e.on();
  			d.on();
  	}
  	if(letter=='f'){
  			a.on();
  			f.on();
  			g.on();
  			e.on();
  	}
  	if(letter=='g'){
  			a.on();
  			b.on();
  			c.on();
  			d.on();
  			f.on();
  			g.on();
  	}
  	if(letter=='h'){
  			b.on();
  			c.on();
  			e.on();
  			f.on();
  			g.on();
  	}
  	if(letter=='i'){
  			e.on();
  			f.on();
  	}
  	if(letter=='j'){
  			d.on();
  			c.on();
  			b.on();
  	}
  	if(letter=='k'){
  			f.on();
  			g.on();
  			b.on();
  			e.on();
  			d.on();
  	}
  	if(letter=='l'){
  			f.on();
  			e.on();
  			d.on();
  	}
  	if(letter=='m'){
  			a.on();
  			e.on();
  			c.on();
  	}
  	if(letter=='n'){
  			g.on();
  			e.on();
  			c.on();
  	}
  	if(letter=='o'){
  			g.on();
  			e.on();
  			c.on();
  			d.on();
  	}
  	if(letter=='p'){
  			a.on();
  			f.on();
  			b.on();
  			g.on();
  			e.on();
  	}
  	if(letter=='q'){
  			a.on();
  			f.on();
  			b.on();
  			g.on();
  			c.on();
  	}
  	if(letter=='r'){
  			g.on();
  			e.on();
  	}
	if(letter=='s'){
  			a.on();
  			f.on();
  			g.on();
  			c.on();
  			d.on();
  	}
  	if(letter=='t'){
  			f.on();
  			g.on();
  			e.on();
  			d.on();
  	}
  	if(letter=='u'){
  			f.on();
  			b.on();
  			e.on();
  			c.on();
  			d.on();
  	}
  	if(letter=='v'){
  			f.on();
  			b.on();
  			g.on();
  	}
  	if(letter=='w'){
  			b.on();
  			c.on();
  			d.on();
  			e.on();
  			f.on();
  			g.on();
  	}
  	if(letter=='x'){
  			a.on();
  			f.on();
  			e.on();
  	}
  	if(letter=='y'){
  			b.on();
  			f.on();
  			g.on();
  			c.on();
  			d.on();
  	}
  	if(letter=='z'){
  			b.on();
  			a.on();
  			g.on();
  			e.on();
  			d.on();
  	}
  	if(letter=='1'){
  			b.on();
  			c.on();
  	}
  	if(letter=='2'){
  			b.on();
  			a.on();
  			g.on();
  			e.on();
  			d.on();
  	}
  	if(letter=='3'){
  			b.on();
  			a.on();
  			g.on();
  			c.on();
  			d.on();
  	}
  	if(letter=='4'){
  			b.on();
  			f.on();
  			g.on();
  			c.on();
  	}
  	if(letter=='5'){
  			f.on();
  			a.on();
  			g.on();
  			c.on();
  			d.on();
  	}
  	if(letter=='6'){
  			a.on();
  			f.on();
  			e.on();
  			g.on();
  			c.on();
  			d.on();
  	}
  	if(letter=='7'){
  			a.on();
  			b.on();
  			c.on();
  	}
  	if(letter=='8'){
  			a.on();
  			b.on();
  			c.on();
  			d.on();
  			e.on();
  			f.on();
  			g.on();
  	}
  	if(letter=='9'){
  			a.on();
  			b.on();
  			c.on();
  			d.on();
  			f.on();
  			g.on();
  	}
  	if(letter=='0'){
  			a.on();
  			b.on();
  			c.on();
  			d.on();
  			e.on();
  			f.on();
  	}
    return callback(this.RESULT_SUCCESS);
};

//Johnny-5 arduino board setup
board.on('ready', function() {
	console.log('hi im here!');
	//sets up LEDs
	a = new five.Led(2);
	b = new five.Led(3);
	c = new five.Led(4);
	d = new five.Led(5);
	e = new five.Led(6);
	f = new five.Led(8);
	g = new five.Led(9);
});

// Export the class
module.exports = MainCharacteristic;