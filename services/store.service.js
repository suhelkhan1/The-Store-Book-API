const ErrorInstance = require('custom-error-instance');
const Store = require('../models/store.model');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class StoreService {

  getAllStore(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Store.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addStore(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const expense = new Store({
          // _id: new mongoose.Types.ObjectId(),
          name: req.body.name,
          location: req.body.location,
          user_id: req.body.user_id,
        });
        resolve(expense.save());
      } catch (err) {
        reject(err);
      }
    });
  }

  updateStore(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Store.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteStore(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Store.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new StoreService();