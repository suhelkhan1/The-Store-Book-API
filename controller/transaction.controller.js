const TransactionService = require('../services/customer.service');

class TransactionController {

  async getAllTransaction (req, res, next) {
    try {
      const data = await TransactionService.getAllTransaction();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addTransaction (req, res, next) {
    try {
      const data = await TransactionService.addTransaction(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteTransaction (req, res, next) {
    try {
      const data = await TransactionService.deleteTransaction(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateTransaction (req, res, next) {
    try {
      const data = await TransactionService.updateTransaction(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new TransactionController();