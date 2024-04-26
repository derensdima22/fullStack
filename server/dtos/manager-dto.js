module.exports = class ManagerDto {
  email;
  id;
  name;
  address;
  contactNumber;
  permissions;
  role;

  constructor(model) {
      this.email = model.email;
      this.id = model._id;
      this.name = model.name;
      this.address = model.address;
      this.contactNumber = model.contactNumber;
      this.permissions = model.permissions;
      this.role = model.role;
  }
}