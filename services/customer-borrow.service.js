const ErrorInstance = require('custom-error-instance');
const CustomerBorrow = require('../models/customer-borrow.model');
const TransactionService = require('../services/transaction.service');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class CustomerBorrowService {

  getAllCustomerBorrow(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await CustomerBorrow.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getCustomerBorrowByStore(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.store_id;
        const borrows = await CustomerBorrow.find({ store_id: id }).exec();
        const data = {
          data: borrows
        };
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addCustomerBorrow(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const transaction = await TransactionService.addTransaction(req, res, next);
        const data = new CustomerBorrow({
          description: req.body.description,
          store_id: req.body.store_id,
          cutomer_id: req.body.cutomer_id,
          amount: transaction,
        });
        resolve(data.save());
      } catch (err) {
        reject(err);
      }
    });
  }

  updateCustomerBorrow(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await CustomerBorrow.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteCustomerBorrow(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await CustomerBorrow.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new CustomerBorrowService();