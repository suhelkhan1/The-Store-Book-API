const UserService = require('../services/user.service');

class UserController {

  async getAllUser (req, res, next) {
    try {
      const data = await UserService.getAllUser();
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async addUser (req, res, next) {
    try {
      const data = await UserService.addUser(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async deleteUser (req, res, next) {
    try {
      const data = await UserService.deleteUser(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }

  async updateUser (req, res, next) {
    try {
      const data = await UserService.updateUser(req, res, next);
      res.json({error: false, data: data})
      res.end();
    } catch(err) {
      next(err);
    }
  }
}

module.exports = new UserController();