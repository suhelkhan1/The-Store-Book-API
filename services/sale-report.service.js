const ErrorInstance = require('custom-error-instance');
const SaleReport = require('../models/sale-report.model');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class SaleReportService {

  getAllSaleReport(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await SaleReport.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addSaleReport(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = new SaleReport({
          store_id: req.body.store_id,
          expense_id: req.body.expense_id,
        });
        resolve(data.save());
      } catch (err) {
        reject(err);
      }
    });
  }

  updateSaleReport(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await SaleReport.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteSaleReport(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await SaleReport.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new SaleReportService();