# MorseCodeJS
A JS program meant to decode button presses from morse code.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need: 
* A Mac
* A Puck from [Puck.js](http://www.espruino.com/Puck.js)
* Arduino Uno 
* Breadboard
* 11 Jumper Wires
* 2 x 220 Ohm Resistors
* Homebrew, NPM, Node, Bleno, and Johnny-Five

Check to see if these are already installed using the following commands. If they return version numbers, (or in the case of 'brew help', help commands) you have them!
```
$ brew help
Example usage: (etc.)
$ npm -v
<Version number>
$ node -v
<Version Number>
```

### Installing

The project itself is easy to install, as it is just cloning or downloading the necessary files.

How to install the modules and frameworks if you don't already have them...

First, if you don't have homebrew, paste the following into your terminal:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

If you want more information on installing homebrew, check out this [link](https://docs.brew.sh/Installation). Otherwise, the installation is rather quick and easy.


Next, install Node and NPM with this command in terminal: 

```
brew install node
```

Next, install Bleno with this command in terminal: 

```
npm install bleno
```

Finally, install Johnny-five with this command in terminal: 

```
npm install johnny-five
```

## Deployment

Assemble your hardware according to the fritzing diagram below:

![Seven-Segment Fritzing Diagram](https://cdn.instructables.com/F5Q/WCQG/HUCTRJM2/F5QWCQGHUCTRJM2.LARGE.jpg?auto=webp)

Open the Espruino IDE, connect your puck, and paste in the code provided in "Espruino.js".

Connect your Arduino project to your Mac with the provided USB cable and run "main.js", found in the folder titled "BLE". 

To run main.js, navigate to the inside of the BLE folder and :

```

```

Immediately run your Espruino code. The puck should connect to your Mac via bluetooth, and as a result, affect the 7-segment output on the Arduino.

## Built With

* [Johnny-5](https://github.com/rwaldron/johnny-five) - A way to communicate with a connected Arduino using JS.
* [Bleno](https://github.com/noble/bleno) - Bluetooth connectivity via NodeJS.
* [Puck.JS](http://www.espruino.com/Puck.js) - Used to connect to the Mac, provide input.
* [Arduino](https://www.arduino.cc/) - For all your robotics and electronics needs

## Acknowledgments

* Sher Marri for the fritzing diagram for the 7-segment display. Their instructable can be found [here](http://www.instructables.com/id/7-Segment-Display-On-Arduino/)
* Jonathan Kingsley for the puck and various guidance.
