var express = require('express');
var router = express.Router();
const storeControler = require('../controller/store.controller');

router.get('/store', storeControler.getAllStore)
router.post('/store', storeControler.addStore)
router.patch('/store/:id', storeControler.updateStore)
router.delete('/store/:id', storeControler.deleteStore)

module.exports = router;