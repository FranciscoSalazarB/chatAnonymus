const moongoose = require('mongoose');
const Model = require('../domain/UserModel');

const UserSchema = new moongoose.Schema(Model);
module.exports = moongoose.model('User', UserSchema);