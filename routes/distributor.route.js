var express = require('express');
var router = express.Router();
const distributorControler = require('../controller/distributor.controller');

router.get('/distributor', distributorControler.getAllDistributor)
router.post('/distributor', distributorControler.addDistributor)
router.patch('/distributor/:id', distributorControler.updateDistributor)
router.delete('/distributor/:id', distributorControler.deleteDistributor)

module.exports = router;