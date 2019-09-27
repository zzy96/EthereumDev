var Web3 = require('web3')

//configuration
var serviceProvider = 'http://localhost:22000'
var ethAccount = {"address":"0xd7a17b4dcada4969ffa93e56dc18ffc349c72ef9","privateKey":"0xe0fd2f32ff10dbe9de5dfde314de12c467ecce5acfaba8b93a707a5aac6bbe0b"}
var web3 = new Web3(serviceProvider)

// deploy new contract
var contractBin = "0x608060405234801561001057600080fd5b506040516020806101698339810180604052602081101561003057600080fd5b81019080805190602001909291905050508060008190555050610111806100586000396000f3fe6080604052348015600f57600080fd5b5060043610604f576000357c01000000000000000000000000000000000000000000000000000000009004806360fe47b11460545780636d4ce63c14607f575b600080fd5b607d60048036036020811015606857600080fd5b8101908080359060200190929190505050609b565b005b608560dc565b6040518082815260200191505060405180910390f35b806000819055507fefe5cb8d23d632b5d2cdd9f0a151c4b1a84ccb7afa1c57331009aa922d5e4f36816040518082815260200191505060405180910390a150565b6000805490509056fea165627a7a72305820d3097fece2e8aac56ea743d30825111f2d97564c44ab8dc0dd5c4599d1631b010029"
var contractAbi = [{"constant":false,"inputs":[{"name":"_x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_initVal","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_value","type":"uint256"}],"name":"valueSet","type":"event"}]

web3.eth.accounts.wallet.add(ethAccount.privateKey)

// use correct address
var myContract = new web3.eth.Contract(contractAbi, "0x3138b5d45638dc5cf94844fcd1c8354cb00506e8")

var myContractSet = myContract.methods.set(19960205)

myContractSet.estimateGas({gas: 4000000}, (error, gas) => {
  if (error) {
    console.log(error)
  } else {
    console.log("gas: " + gas)
  }
})

myContractSet.send({
  from: ethAccount.address,
  gas: 4000000,
  gasPrice: 0
}, function(error, transactionHash){
  if (error) {
    console.log(error)
  } else {
    console.log("transactionHash: " + transactionHash)
  }
}).on('receipt', (receipt) => { console.log("receipt: " + receipt) })
