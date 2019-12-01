const ErrorInstance = require('custom-error-instance');
const Transaction = require('../models/transaction.model');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class TransactionService {

  getAllTransaction(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Transaction.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getTransactionById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Transaction.find({_id: id}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addTransaction(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = new Transaction({
          amount: req.body.amount,
          type: req.body.type,
          description: req.body.description,
          store_id: req.body.store_id,
        });
        resolve(data.save());
      } catch (err) {
        reject(err);
      }
    });
  }

  updateTransaction(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Transaction.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteTransaction(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Transaction.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new TransactionService();