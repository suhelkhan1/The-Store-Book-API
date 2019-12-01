var express = require('express');
var router = express.Router();
const customerBorrowControler = require('../controller/customer-borrow.controller');

router.get('/customer_borrow', customerBorrowControler.getAllCustomerBorrow)
router.post('/customer_borrow', customerBorrowControler.addCustomerBorrow)
router.patch('/customer_borrow/:id', customerBorrowControler.updateCustomerBorrow)
router.delete('/customer_borrow/:id', customerBorrowControler.deleteCustomerBorrow)

module.exports = router;