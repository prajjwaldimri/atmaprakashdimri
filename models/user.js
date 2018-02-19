const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const User = new mongoose.Schema({
  fullName: String,
  shortName: String,
  email: String,
  admin: Boolean,
  phoneNumber: String,
  facebookUsername: String,
  bio: String,
  whatIDo: String,
  profileImageId: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
