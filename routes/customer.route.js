var express = require('express');
var router = express.Router();
const customerControler = require('../controller/customer.controller');

router.get('/customer', customerControler.getAllCustomer)
router.post('/customer', customerControler.addCustomer)
router.patch('/customer/:id', customerControler.updateCustomer)
router.delete('/customer/:id', customerControler.deleteCustomer)

module.exports = router;