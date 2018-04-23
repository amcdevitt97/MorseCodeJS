let bleno = require('bleno');

let MainCharacteristic = require('./characteristic');

console.log('bleno - echo');

bleno.on('stateChange', function(state) {
    console.log('on -> stateChange: ' + state);

    if (state === 'poweredOn') {
        bleno.startAdvertising('Alyssa\'s Mac', ['ec00']);
    } else {
        bleno.stopAdvertising();
    }
});

bleno.on('advertisingStart', function(error) {
    console.log('on -> advertisingStart: ' + (error ? 'error ' + error : 'success'));

    if (error) {
        console.error('Got error: ' + error);
        return;
    }

    bleno.setServices([
        new bleno.PrimaryService({
            uuid: 'ec00',
            characteristics: [
                new MainCharacteristic()
            ]
        })
    ]);
});