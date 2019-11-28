const ErrorInstance = require('custom-error-instance');
const User = require('../models/user.model');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class UserService {

  getAllUser(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await User.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addUser(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const expense = new User({
          name: req.body.name,
          phone: req.body.phone,
        });
        resolve(expense.save());
      } catch (err) {
        reject(err);
      }
    });
  }

  updateUser(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await User.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteUser(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await User.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new UserService();