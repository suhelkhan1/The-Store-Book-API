const CreditService = require('../services/credit.service');

class CreditController {

  async getAllCredit (req, res, next) {
    try {
      const data = await CreditService.getAllCredit();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addCredit (req, res, next) {
    try {
      const data = await CreditService.addCredit(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteCredit (req, res, next) {
    try {
      const data = await CreditService.deleteCredit(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateCredit (req, res, next) {
    try {
      const data = await CreditService.updateCredit(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new CreditController();