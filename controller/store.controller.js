const StoreService = require('../services/store.service');

class StoreController {

  async getAllStore (req, res, next) {
    try {
      const data = await StoreService.getAllStore();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addStore (req, res, next) {
    try {
      const data = await StoreService.addStore(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteStore (req, res, next) {
    try {
      const data = await StoreService.deleteStore(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateStore (req, res, next) {
    try {
      const data = await StoreService.updateStore(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new StoreController();