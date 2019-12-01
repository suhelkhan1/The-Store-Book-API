var express = require('express');
var router = express.Router();
const creditControler = require('../controller/credit.controller');

router.get('/credit', creditControler.getAllCredit)
router.get('/credit/:store_id', creditControler.getCreditByStore)
router.post('/credit', creditControler.addCredit)
router.patch('/credit/:id', creditControler.updateCredit)
router.delete('/credit/:id', creditControler.deleteCredit)

module.exports = router;