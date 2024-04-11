/*
* dto = data transfer object
*  */
module.exports = class UserDto {
    email;
    id;
    isActivate;
    name;
    address;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivate = model.isActivate;
        this.name = model.name;
        this.address = model.address;
    }
}