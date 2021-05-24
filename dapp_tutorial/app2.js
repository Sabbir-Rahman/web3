var Web3 = require('web3')
//show the web3 basic function
// console.log(Web3)

//project url taken from infura this same thing can be done by ganache
var url = 'https://mainnet.infura.io/v3/3dbcdfed652e4478ba9bba18c482755d'
var web3_url = new Web3(url)
//showing more function of that url project
// console.log(web3_url)

var address = '0x00000000219ab540356cBB839Cbe05303d7705Fa'