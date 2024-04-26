const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String},
    number: {type: String},
    address: {type: String},
    isActivate: {type: Boolean, default: false},
    activationLink: {type: String},
    contactNumber: {type: String},
    permissions: {type: Array},
})

module.exports = model('User', UserSchema);