const ErrorInstance = require('custom-error-instance');
const Customer = require('../models/customer.model');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class CustomerService {

  getAllCustomer(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Customer.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addCustomer(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const expense = new Customer({
          // _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          phone: req.body.phone,
          description: req.body.description,
        });
        resolve(expense.save());
      } catch (err) {
        reject(err);
      }
    });
  }

  updateCustomer(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Customer.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteCustomer(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Customer.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new CustomerService();