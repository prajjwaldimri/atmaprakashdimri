const mongoose = require('mongoose');

const File = new mongoose.Schema(
  {
    name: String,
    type: String,
    fileId: String,
    mimetype: String
  },
  {
    timestamps: {
      createdAt: 'created_at'
    }
  }
);

module.exports = mongoose.model('File', File);
