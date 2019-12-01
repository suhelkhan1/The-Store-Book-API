var express = require('express');
var router = express.Router();
const transactionControler = require('../controller/transaction.controller');

router.get('/transaction', transactionControler.getAllTransaction)
router.post('/transaction', transactionControler.addTransaction)
router.patch('/transaction/:id', transactionControler.updateTransaction)
router.delete('/transaction/:id', transactionControler.deleteTransaction)

module.exports = router;