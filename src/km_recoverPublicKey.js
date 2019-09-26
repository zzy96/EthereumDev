var ethereumUtil = require('ethereumjs-util')

// put private key here
var privateKey = "0xe6181caaffff94a09d7e332fc8da9884d99902c7874eb74354bdcadf411929f1"

console.log("public key: " + ethereumUtil.bufferToHex(ethereumUtil.privateToPublic(privateKey)))
console.log("address: " + ethereumUtil.bufferToHex(ethereumUtil.privateToAddress(privateKey)))
