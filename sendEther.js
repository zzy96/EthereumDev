var Web3 = require('web3');
var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json'));

// configuration
var serviceProvider = 'https://kovan.infura.io';

var web3 = new Web3(new Web3.providers.HttpProvider(serviceProvider));

// transfer detail
var ethAccount = config.account1;
var receiver = config.mainAccount;
var amount = web3.utils.toWei(0.1, "ether");

web3.eth.accounts.wallet.add(ethAccount.privateKey);

web3.eth.sendTransaction({
	from: ethAccount.address,
	to: receiver.address,
	value: amount,
	gas: 1000000,
	gasPrice: '10000'
}, function(error, transactionHash){})
.on('error', function(error){
	console.log(error);
})
.on('transactionHash', function(transactionHash){
	console.log("transactionHash: " + transactionHash);
})
.on('receipt', function(receipt){
	console.log("contractAdress: " + receipt.contractAddress) // contains the new contract address
})
.on('confirmation', function(confirmationNumber, receipt){
	console.log("confirmationNumber: " + confirmationNumber)
})
.then(function(newContractInstance){
	console.log(newContractInstance) // instance with the new contract address
});