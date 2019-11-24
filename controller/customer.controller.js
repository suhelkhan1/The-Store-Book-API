const CustomerService = require('../services/customer.service');

class CustomerController {

  async getAllCustomer (req, res, next) {
    try {
      const data = await CustomerService.getAllCustomer();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addCustomer (req, res, next) {
    try {
      const data = await CustomerService.addCustomer(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteCustomer (req, res, next) {
    try {
      const data = await CustomerService.deleteCustomer(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateCustomer (req, res, next) {
    try {
      const data = await CustomerService.updateCustomer(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new CustomerController();