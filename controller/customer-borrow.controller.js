const CustomerBorrowService = require('../services/customer-borrow.service');

class CustomerBorrowController {

  async getAllCustomerBorrow (req, res, next) {
    try {
      const data = await CustomerBorrowService.getAllCustomerBorrow();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addCustomerBorrow (req, res, next) {
    try {
      const data = await CustomerBorrowService.addCustomerBorrow(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteCustomerBorrow (req, res, next) {
    try {
      const data = await CustomerBorrowService.deleteCustomerBorrow(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateCustomerBorrow (req, res, next) {
    try {
      const data = await CustomerBorrowService.updateCustomerBorrow(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new CustomerBorrowController();