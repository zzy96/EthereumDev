var keythereum = require('keythereum');
var ethereumUtil = require('ethereumjs-util');
var fs = require('fs');

var params = { keyBytes: 32, ivBytes: 16 };

keythereum.create(params, function (dk) {
    console.log(dk);
    // The first 20 bytes of Keccak 256 hashes of public keys are referred to as account addresses.
    var address = ethereumUtil.bufferToHex(ethereumUtil.privateToAddress(dk.privateKey));
    fs.writeFileSync('output/newKey.json', JSON.stringify({
    	'address': address,
		'privateKey': ethereumUtil.bufferToHex(dk.privateKey),
	}));
});