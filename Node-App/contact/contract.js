const web3 = require('../helper/web3')
const contract = require('../../ethereum/build/contracts/SimpleStorage.json')

let address = "0xbfd7D8B34D6e4F16F124EA8109822bF04c66489a"
let abi = contract.abi;
let contractInstance = new web3.eth.Contract(abi,address)

module.exports = contractInstance