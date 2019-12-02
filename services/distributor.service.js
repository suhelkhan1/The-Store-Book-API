const ErrorInstance = require('custom-error-instance');
const Distributor = require('../models/distributor.model');


const CustomError = ErrorInstance('Fault', {
  fileName: __filename,
  customError: true
})

class DistributorService {

  getAllDistributor(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Distributor.find().exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  getDistributorById(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await Distributor.findById(req.body.distributor_id).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  addDistributor(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const expense = new Distributor({
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

  updateDistributor(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Distributor.updateOne({ _id: id }, { $set: req.body }, {runValidators: true}).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  deleteDistributor(req, res, next) {
    return new Promise(async (resolve, reject) => {
      try {
        const id = req.params.id;
        const data = await Distributor.remove({ _id: id }).exec();
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = new DistributorService();