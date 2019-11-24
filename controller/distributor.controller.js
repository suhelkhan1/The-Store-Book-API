const DistributorService = require('../services/distributor.service');

class DistributorController {

  async getAllDistributor (req, res, next) {
    try {
      const data = await DistributorService.getAllDistributor();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addDistributor (req, res, next) {
    try {
      const data = await DistributorService.addDistributor(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteDistributor (req, res, next) {
    try {
      const data = await DistributorService.deleteDistributor(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateDistributor (req, res, next) {
    try {
      const data = await DistributorService.updateDistributor(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new DistributorController();