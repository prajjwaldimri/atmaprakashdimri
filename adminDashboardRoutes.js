const router = require('express').Router();
const blogController = require('./controllers/blogController');
const userController = require('./controllers/userController');
const fileController = require('./controllers/fileController');

// Request Authenticator
router.use('/', (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
});

router.get('/allBlogPosts', blogController.blog_list);

router.get('/allUploadedFiles', fileController.file_list);

router.get('/allUploadedImages', fileController.image_list);

router.get('/downloadFile/:fileId', fileController.file_download);

router.get('/deleteFile/:fileId', fileController.file_delete);

router.get('/downloadImage/:fileId', fileController.image_download);

router.get('/deleteImage/:fileId', fileController.image_delete);

router.get('/editBlogPost/:blogId', blogController.edit_blog_post_get);

router.post('/editBlogPost/:blogId', blogController.edit_blog_post_post);

router.get('/deleteBlogPost/:blogId', blogController.delete_blog_post);

router.get('/editProfile', userController.edit_profile_get);

router.post('/editProfile', userController.edit_profile_post);

router.get('/editPassword', userController.edit_password_get);

router.post('/editPassword', userController.edit_password_post);

router.get('/newBlogPost', blogController.new_blog_post_get);

router.post('/newBlogPost', blogController.new_blog_post_post);

router.get('/newFileUpload', fileController.file_upload_get);

router.post('/newFileUpload', fileController.file_upload_post);

router.get('/newImageUpload', fileController.image_upload_get);

router.post('/newImageUpload', fileController.image_upload_post);

module.exports = router;
