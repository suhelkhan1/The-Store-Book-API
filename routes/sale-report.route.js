var express = require('express');
var router = express.Router();
const saleReportControler = require('../controller/sale-report.controller');

router.get('/sale_report', saleReportControler.getAllSaleReport)
router.post('/sale_report', saleReportControler.addSaleReport)
router.patch('/sale_report/:id', saleReportControler.updateSaleReport)
router.delete('/sale_report/:id', saleReportControler.deleteSaleReport)

module.exports = router;