const { Schema, model } = require('mongoose');

const ManagerSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String},
    number: {type: String},
    address: {type: String},
    activationLink: {type: String},
    contactNumber: {type: String},
    permissions: {type: Array},
})

module.exports = model('Manager', ManagerSchema);