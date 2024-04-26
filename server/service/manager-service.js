const ManagerModel = require('../models/manager-model');
const ManagerDto = require('../dtos/manager-dto');
const bcrypt = require('bcrypt');
const ApiError = require('../exceptions/api-error');

class ManagerService {
  async create(body) {
    const {
      email,
      password,
      name,
    } = body;
    const candidate = await ManagerModel.findOne({email});
    if(candidate) {
        throw ApiError.BadRequest(`A manager named ${email} already exists`)
    }
    const hashPassword = await bcrypt.hash(password, 3);
    const permissions = ['manager', 'brand'];

    const manager = await ManagerModel.create({
      email,
      password: hashPassword,
      name,
      permissions,
    });

    const managerDto = new ManagerDto(manager);

    return {
        manager: managerDto
    }
  }

  async editManager(id, body) {
    const manager = await ManagerModel.findById(id);

    if(!manager) {
      throw ApiError.BadRequest('No manager with this name was found');
    }
    
    const { name, number, address, contactNumber } = body;
    manager.name = name || manager.name;
    manager.address = address || manager.address;
    manager.number = number || manager.number;
    manager.contactNumber = contactNumber || manager.contactNumber;
 
    await manager.save();

    return manager;
} 

  async getOneManager(id) {
    const manager = await ManagerModel.findById(id);
    const managerDto = new ManagerDto(manager);

    if(!managerDto) {
        throw ApiError.BadRequest('No manager with that name was found');
    }
    
    return managerDto;
}

  async getManagers() {
    const managers = ManagerModel.find();

    const managersDto = (await managers).map((manager) => new ManagerDto(manager));
    
    if(!managersDto) {
      throw ApiError.BadRequest('Manager not found');
  }
    return managersDto;
  }
}

module.exports = new ManagerService();