const mongoose = require('mongoose');

const Blog = new mongoose.Schema(
  {
    title: String,
    content: String,
    imageId: mongoose.Schema.Types.ObjectId
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('Blog', Blog);
