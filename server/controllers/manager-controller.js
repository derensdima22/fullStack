const managerService = require('../service/manager-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');

class ManagerController {
  async createManager(req, res, next){
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
           return  next(ApiError.BadRequest('Validation error', errors.array()));
        }
        const body = req.body;
        console.log('body', body);
        const managerData = await managerService.create(body);

        return res.json(managerData);
    }catch (e) {
       next(e);
    }
  }

  async updateManager(req, res, next){
    try {
      const id = req.params.id;
      const body = req.body;

      const user = await managerService.editManager(id, body);
      return res.json(user);
    }catch (e) {
       next(e);
    }
  }

  async managers(req, res, next){
    try {
      const users = await managerService.getManagers();
      return res.json(users);
    }catch (e) {
       next(e);
    }
  }
}

module.exports = new ManagerController();