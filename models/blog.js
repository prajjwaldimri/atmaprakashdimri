const mongoose = require('mongoose');

const Blog = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('Blog', Blog);
