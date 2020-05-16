const web3 = require('../helper/web3')
const contract = require('../../ethereum/build/contracts/SimpleStorage.json')

let address = "0x709533806C05658f88C25b258CA20eB92c208473"
let abi = contract.abi;
let contractInstance = new web3.eth.Contract(abi,address)

module.exports = contractInstance