const ExpenseService = require('../services/ExpensesService');

class ExpenseController {

  async getExpnse (req, res, next) {
    try {
      const data = await ExpenseService.getExpnse();
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
}

module.exports = new ExpenseController();