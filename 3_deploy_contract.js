var Web3 = require('web3');

//configuration
var serviceProvider = 'http://localhost:22000';
var ethAccount = {"address":"0xd7a17b4dcada4969ffa93e56dc18ffc349c72ef9","privateKey":"0xe0fd2f32ff10dbe9de5dfde314de12c467ecce5acfaba8b93a707a5aac6bbe0b"};

var web3 = new Web3(new Web3.providers.HttpProvider(serviceProvider));

// deploy new contract
var contractBin = "0x6060604052341561000f57600080fd5b604051602080610149833981016040528080519060200190919050505b806000819055505b505b610104806100456000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680632a1afcd914605157806360fe47b11460775780636d4ce63c146097575b600080fd5b3415605b57600080fd5b606160bd565b6040518082815260200191505060405180910390f35b3415608157600080fd5b6095600480803590602001909190505060c3565b005b341560a157600080fd5b60a760ce565b6040518082815260200191505060405180910390f35b60005481565b806000819055505b50565b6000805490505b905600a165627a7a72305820d5851baab720bba574474de3d09dbeaabc674a15f4dd93b974908476542c23f00029";
var contractAbi = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"initVal","type":"uint256"}],"payable":false,"type":"constructor"}];

web3.eth.accounts.wallet.add(ethAccount.privateKey);

var myContract = new web3.eth.Contract(contractAbi);

myContract.deploy({
	data: contractBin,
	arguments: [19970419]
})
.send({
    from: ethAccount.address,
    gas: 4000000,
    gasPrice: 0
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
	console.log(newContractInstance._address) // instance with the new contract address
});
