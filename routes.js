const router = require('express').Router();
const userController = require('./controllers/userController');
const fileController = require('./controllers/fileController');
const blogController = require('./controllers/blogController');
const awardController = require('./controllers/awardController');
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('layout', { pageTitle: 'About' });
});

// router.post('/adminRegister', userController.register_user_post);

router.get('/gallery', (req, res) => {
  res.render('layout', { pageTitle: 'Gallery' });
});

router.get('/about', (req, res) => {
  res.redirect('/');
});

router.get('/blogs', (req, res) => {
  res.render('layout', { pageTitle: 'Blogs' });
});

router.get('/adminLogin', (req, res) => {
  res.render('adminLogin', { pageTitle: 'Admin Login' });
});

router.post(
  '/adminLogin',
  passport.authenticate('local', {
    failureRedirect: '/adminLogin',
    failureFlash: 'Invalid username or password'
  }),
  (req, res) => {
    res.redirect('/adminDashboard/editProfile');
  }
);

router.get('/blog/:blogId', blogController.blog_show);

router.get('/awards', awardController.award_list);

// AJAX Routes
router.get('/allImages', fileController.image_list_json);

router.get('/showImage/:fileId', fileController.image_download);

router.get('/allBlogPosts', blogController.blog_list_json);

router.get('/blogContent/:blogId', blogController.blog_show_json);

router.get('/getAwards', awardController.award_list_json);

router.get('/getAboutDetails', userController.about_details);

module.exports = router;
