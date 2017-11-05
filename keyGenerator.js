var keythereum = require('keythereum');
var ethereumUtil = require('ethereumjs-util');
var fs = require('fs');

var params = { keyBytes: 32, ivBytes: 16 };

keythereum.create(params, function (dk) {
    console.log(dk);
    // The first 20 bytes of Keccak 256 hashes of public keys are referred to as account addresses.
    var address = ethereumUtil.bufferToHex(ethereumUtil.privateToAddress(dk.privateKey));
    fs.writeFileSync('newKey.json', JSON.stringify({
		'privateKey': ethereumUtil.bufferToHex(dk.privateKey),
		'address': address,
	}));
});