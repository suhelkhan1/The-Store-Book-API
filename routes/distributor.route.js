var express = require('express');
var router = express.Router();
const distributorControler = require('../controller/distributor.controller');

router.get('/distributor', distributorControler.getAlldistributor)
router.post('/distributor', distributorControler.adddistributor)
router.patch('/distributor/:id', distributorControler.updatedistributor)
router.delete('/distributor/:id', distributorControler.deletedistributor)

module.exports = router;