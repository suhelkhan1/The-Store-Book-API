const ExpenseService = require('../services/expenses.service');

class ExpenseController {

  async getAllExpnse (req, res, next) {
    try {
      const data = await ExpenseService.getAllExpnse();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addExpnse (req, res, next) {
    try {
      const data = await ExpenseService.addExpnse(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteExpnse (req, res, next) {
    try {
      const data = await ExpenseService.deleteExpnse(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateExpnse (req, res, next) {
    try {
      const data = await ExpenseService.updateExpnse(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new ExpenseController();