const path = require('path');
const router = require('express').Router();
const Blog = require('./models/blog');
const multer = require('multer');
const mongoose = require('mongoose');
let gridfsFile;
let gridfsImage;
let File;
let Image;
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

// Request Authenticator
router.use('/', (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
});

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

router.get('/allBlogPosts', (req, res) => {
  let blogPosts = [];
  Blog.find({}, (err, docs) => {
    if (err) return res.sendStatus(300);
    blogPosts = docs;
    res.render('dashboard/allBlogPosts', {
      pageTitle: 'List of published blog posts',
      blogPosts: blogPosts
    });
  });
});

router.get('/allUploadedFiles', (req, res) => {
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
});

router.get('/allUploadedImages', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      req.flash('danger', err);
      res.redirect('back');
    }
    console.log(images);
    res.render('dashboard/allUploadedImages', {
      pageTitle: 'List of uploaded files on server',
      images: images
    });
  });
});

router.get('/downloadFile/:fileId', (req, res) => {
  let fileStream = File.readById(req.params.fileId);
  fileStream.pipe(res);
});

router.get('/deleteFile/:fileId', (req, res) => {
  File.unlinkById(req.params.fileId, (err, unlinkedAttachment) => {
    if (err) {
      req.flash('danger', err);
    }
    req.flash('success', 'File successfully deleted');
    res.redirect('back');
  });
});

router.get('/downloadImage/:fileId', (req, res) => {
  let imageStream = Image.readById(req.params.fileId);
  imageStream.pipe(res);
});

router.get('/deleteImage/:fileId', (req, res) => {
  Image.unlinkById(req.params.fileId, (err, unlinkedAttachment) => {
    if (err) {
      req.flash('danger', err);
    }
    req.flash('success', 'Image successfully deleted');
    res.redirect('back');
  });
});

router.get('/editBlogPost/:blogId', (req, res) => {
  Blog.findById(req.params.blogId, (err, blog) => {
    if (err) return res.statusCode(404);
    else {
      res.render('dashboard/editBlogPost', {
        pageTitle: 'Edit existing blog post',
        blog: blog
      });
    }
  });
});

router.post('/editBlogPost/:blogId', (req, res) => {
  Blog.findByIdAndUpdate(
    req.params.blogId,
    {
      title: req.body.blogTitle,
      content: req.body.blogContent
    },
    (err, blog) => {
      if (err) {
        req.flash('danger', 'Error updating the blog');
      } else {
        req.flash('success', 'Blog Updated successfully');
      }
      res.redirect('/adminDashboard/allBlogPosts');
    }
  );
});

router.get('/deleteBlogPost/:blogId', (req, res) => {
  Blog.findByIdAndRemove(req.params.blogId, (err, doc) => {
    if (err) {
      req.flash('danger', 'Cannot delete blog');
    } else {
      req.flash('success', 'Blog deleted successfully');
    }
    res.redirect('/adminDashboard/allBlogPosts');
  });
});

router.get('/editProfile', (req, res) => {
  res.render('dashboard/editProfile', { pageTitle: 'Edit your Profile' });
});

router.get('/editPassword', (req, res) => {
  res.render('dashboard/editPassword', { pageTitle: 'Change Your Password' });
});

router.post('/editPassword', (req, res) => {
  if (!req.body) return res.sendStatus(400);

  if (req.body.newPassword !== req.body.confirmNewPassword) {
    req.flash('danger', 'New and Confirm Passwords are not same');
    res.redirect('back');
  }

  req.user.changePassword(
    req.body.currentPassword,
    req.body.newPassword,
    function (error) {
      if (error) return res.sendStatus(400);
      req.flash('success', 'Successfully changed password');
      res.redirect('back');
    }
  );
});

router.get('/newBlogPost', (req, res) => {
  res.render('dashboard/newBlogPost', { pageTitle: 'Admin Dashboard' });
});

router.post('/newBlogPost', (req, res) => {
  if (!req.body) return res.sendStatus(400);

  Blog.create(
    {
      title: req.body.blogTitle,
      content: req.body.blogContent
    },
    (err, blogPost) => {
      if (err) {
        req.flash('danger', 'Cannot Save Blog Post');
      } else {
        req.flash('success', 'Blog Post Saved!');
      }
      res.redirect('back');
    }
  );
});

router.get('/newFileUpload', (req, res) => {
  res.render('dashboard/newFileUpload', { pageTitle: 'Upload a file' });
});

router.post('/newFileUpload', (req, res) => {
  fileUpload(req, res, err => {
    if (err) {
      req.flash('danger', 'Error Uploading File');
      console.log(err);
    } else {
      req.flash('success', 'Successfully uploaded file');
    }
    res.redirect('/adminDashboard/allUploadedFiles');
  });
});

router.get('/newImageUpload', (req, res) => {
  res.render('dashboard/newImageUpload', { pageTitle: 'Upload an image' });
});

router.post('/newImageUpload', (req, res) => {
  imageUpload(req, res, err => {
    if (err) {
      req.flash('danger', 'Error Uploading File');
      console.log(err);
    } else {
      req.flash('success', 'Successfully uploaded image');
    }
    res.redirect('/adminDashboard/allUploadedImages');
  });
});

router.post('/newImageUpload', (req, res) => {
  imageUpload(req, res, err => {
    if (err) {
      req.flash('danger', 'Error uploading image');
    } else {
      req.flash('success', 'Successfully uploaded image');
    }
    res.redirect('/adminDashboard/allUploadedImages');
  });
});

module.exports = router;
