const ErrorInstance = require('custom-error-instance');
const mongoose = require('mongoose');
const Expenses = require('../models/expenses.model');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class ExpensesService {

  getExpnse(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Expenses.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addExpnse(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const expense = new Expenses({
          // _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
        });
        resolve(expense.save());
      } catch (err) {
        reject(err);
      }
    });
  }

  updateExpnse(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Expenses.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteExpnse(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Expenses.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new ExpensesService();