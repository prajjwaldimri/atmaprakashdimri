let gridfsFile, File, gridfsImage, Image;
const path = require('path');
const multer = require('multer');

const mongoose = require('mongoose');
mongoose
  .connect(
    process.env.MONGODB_URL || 'mongodb://localhost/passport_local_mongoose'
  )
  .then(
    () => {
      gridfsFile = require('mongoose-gridfs')({
        collection: 'files',
        model: 'File',
        mongooseConnection: mongoose.connection
      });
      File = gridfsFile.model;
      gridfsImage = require('mongoose-gridfs')({
        collection: 'images',
        model: 'Image',
        mongooseConnection: mongoose.connection
      });
      Image = gridfsImage.model;
    },
    err => {
      console.log(err);
    }
  );

const GridFsStorage = require('multer-gridfs-storage');
const fileStorage = new GridFsStorage({
  url: process.env.MONGODB_URL || 'mongodb://localhost/passport_local_mongoose',
  file: (req, file) => {
    return {
      filename:
        file.originalname + '-' + Date.now() + path.extname(file.originalname),
      bucketName: 'files'
    };
  }
});
const imageStorage = new GridFsStorage({
  url: process.env.MONGODB_URL || 'mongodb://localhost/passport_local_mongoose',
  file: (req, file) => {
    return {
      filename:
        file.originalname + '-' + Date.now() + path.extname(file.originalname),
      bucketName: 'images'
    };
  }
});

const fileUpload = multer({
  storage: fileStorage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb, /doc|docx|xls|xlsx|ppt|pdf|desktop/);
  }
}).single('uploadedFile');

const imageUpload = multer({
  storage: imageStorage,
  limits: { fileSize: 50000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb, /jpeg|jpg|png|gif/);
  }
}).single('uploadedImage');

function checkFileType (file, cb, allowedFileTypes) {
  // Check extension
  const extName = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  // Check MIME-TYPE
  const mimeType = allowedFileTypes.test(file.mimetype);

  if (extName && mimeType) {
    return cb(null, true);
  } else {
    cb(new Error('File Type Not allowed!'));
  }
}

exports.file_list = (req, res) => {
  File.find({}, (err, files) => {
    if (err) {
      req.flash('danger', err);
      res.redirect('back');
    }
    res.render('dashboard/allUploadedFiles', {
      pageTitle: 'List of uploaded files on server',
      files: files
    });
  });
};

exports.file_list_json = (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      req.flash('danger', err);
      res.redirect('back');
    }
    res.json(images);
  });
};

exports.image_list = (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      req.flash('danger', err);
      res.redirect('back');
    }
    res.render('dashboard/allUploadedImages', {
      pageTitle: 'List of uploaded files on server',
      images: images
    });
  });
};

exports.file_download = (req, res) => {
  let fileStream = File.readById(req.params.fileId);
  fileStream.pipe(res);
};

exports.image_download = (req, res) => {
  let imageStream = Image.readById(req.params.fileId);
  imageStream.pipe(res);
};

exports.file_delete = (req, res) => {
  File.unlinkById(req.params.fileId, (err, unlinkedAttachment) => {
    if (err) {
      req.flash('danger', err);
    }
    req.flash('success', 'File successfully deleted');
    res.redirect('back');
  });
};

exports.image_delete = (req, res) => {
  Image.unlinkById(req.params.fileId, (err, unlinkedAttachment) => {
    if (err) {
      req.flash('danger', err);
    }
    req.flash('success', 'Image successfully deleted');
    res.redirect('back');
  });
};

exports.file_upload_get = (req, res) => {
  res.render('dashboard/newFileUpload', { pageTitle: 'Upload a file' });
};

exports.file_upload_post = (req, res) => {
  fileUpload(req, res, err => {
    if (err) {
      req.flash('danger', 'Error Uploading File');
      console.log(err);
    } else {
      req.flash('success', 'Successfully uploaded file');
    }
    res.redirect('/adminDashboard/allUploadedFiles');
  });
};

exports.image_upload_get = (req, res) => {
  res.render('dashboard/newImageUpload', { pageTitle: 'Upload an image' });
};

exports.image_upload_post = (req, res) => {
  imageUpload(req, res, err => {
    if (err) {
      req.flash('danger', 'Error Uploading File');
      console.log(err);
    } else {
      req.flash('success', 'Successfully uploaded image');
    }
    res.redirect('/adminDashboard/allUploadedImages');
  });
};
