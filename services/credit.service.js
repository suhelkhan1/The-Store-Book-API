const ErrorInstance = require('custom-error-instance');
const Credit = require('../models/credit.model');
const TransactionService = require('../services/transaction.service');
const DistributorService = require('../services/distributor.service');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class CreditService {

  getAllCredit(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Credit.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getCreditByStore(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.store_id;
        const credits = await Credit.find({ store_id: id }).exec();
        const data = {
          data: credits
        };
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addCredit(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const transaction = await TransactionService.addTransaction(req, res, next);
        const distributor = await DistributorService.getDistributorById(req, res, next);
        const data = new Credit({
          store_id: req.body.store_id,
          amount: transaction,
          distributor: distributor,
          payment_status: false
        });
        resolve(data.save());
      } catch (err) {
        reject(err);
      }
    });
  }

  updateCredit(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Credit.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteCredit(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Credit.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new CreditService();