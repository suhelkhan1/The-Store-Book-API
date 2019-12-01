var express = require('express');
var router = express.Router();
const creditControler = require('../controller/credit.controller');

router.get('/credit', creditControler.getAllCredits)
router.post('/credit', creditControler.addCredits)
router.patch('/credit/:id', creditControler.updateCredits)
router.delete('/credit/:id', creditControler.deleteCredits)

module.exports = router;