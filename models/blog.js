const mongoose = require('mongoose');

const Blog = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('Blog', Blog);
