const router = require('express').Router();
const userController = require('./controllers/userController');
const fileController = require('./controllers/fileController');
const blogController = require('./controllers/blogController');
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home' });
});

router.post('/adminRegister', userController.register_user_post);

router.get('/gallery', (req, res) => {
  res.render('gallery', { pageTitle: 'Gallery' });
});

router.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About' });
});

router.get('/blogs', (req, res) => {
  res.render('blogs', { pageTitle: 'Blog' });
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

// AJAX Routes
router.get('/allImages', fileController.image_list_json);

router.get('/showImage/:fileId', fileController.image_download);

router.get('/allBlogPosts', blogController.blog_list_json);

router.get('/blog/:blogId', blogController.blog_show);

module.exports = router;
