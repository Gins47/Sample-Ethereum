const router = require('express').Router()
const web3 = require('../helper/web3')
const contract = require('../contact/contract')
router.route('/getHash').post(async (req, res) => {
    try{
        let file_name = web3.utils.toHex(req.body.file_name);
        const accounts = await web3.eth.personal.getAccounts();
        let result = await contract.methods.get(file_name).call({
            from: accounts[0],
            gas: 99999
        });
        console.log("result = ", result)
        res.status(200).json({file_name:req.body.file_name,hash:result});

    }catch(err) {
        console.log("Error == ", err)
        res.status(400).json(err);
    }

})

router.route('/addHash').post(async (req, res) => {
    try {
        let file_name = web3.utils.toHex(req.body.file_name);
        let content = req.body.content
        const accounts = await web3.eth.personal.getAccounts();
        let transaction = await contract.methods.set(file_name, content).send({
            from: accounts[0],
            gas: 99999
        });
        console.log("Transaction = ", transaction)
        res.status(200).json({Transaction_Hash: transaction.transactionHash});

    } catch (err) {
        console.log("Error == ", err)
        res.status(400).json(err);
    }

})

module.exports = router