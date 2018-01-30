const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema({
  name: String,
  email: String,
  admin: Boolean
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
