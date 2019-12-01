const SaleReportService = require('../services/sale-report.service');

class SaleReportController {

  async getAllSaleReport (req, res, next) {
    try {
      const data = await SaleReportService.getAllSaleReport();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addSaleReport (req, res, next) {
    try {
      const data = await SaleReportService.addSaleReport(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteSaleReport (req, res, next) {
    try {
      const data = await SaleReportService.deleteSaleReport(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateSaleReport (req, res, next) {
    try {
      const data = await SaleReportService.updateSaleReport(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new SaleReportController();