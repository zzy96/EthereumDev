const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:22000'));

var address = "0x685e0b659c3be1c465d5bb37c03e6263efcae25b"
var abi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"type":"constructor"}]
// var private = web3.eth.contract(abi).at(address) // web3 1.0.0-beta.24
var private = new web3.eth.Contract(abi, address)

private.set(4).send({from:"0xed9d02e382b34818e88b88a309c7fe71e65f419d",gas:4000000,privateFor:["1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg="]})

// BULeR8JyUWhiuuCMU/HLA0Q5pzkYT+cHII3ZKBey3Bo=
// QfeDAys9MPDs2XHExtc84jKGHxZg/aj52DTh0vtA3Xc=
// 1iTZde/ndBHvzhcl7V68x44Vx7pl8nwx9LqnM/AfJUg=
// oNspPPgszVUFw0qmGFfWwh1uxVUXgvBxleXORHj07g8=
