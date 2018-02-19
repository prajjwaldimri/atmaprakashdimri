const mongoose = require('mongoose');

const Award = new mongoose.Schema({
  name: String,
  time: String,
  long_description: String,
  imageIds: [String]
});

module.exports = mongoose.model('Award', Award);
