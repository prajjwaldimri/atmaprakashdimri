const mongoose = require('mongoose');

const Award = new mongoose.Schema({
  title: String,
  short_description: String,
  long_description: String,
  heroImageId: String
});

module.exports = mongoose.model('Award', Award);
