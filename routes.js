const router = require('express').Router();
const userController = require('./controllers/userController');
const fileController = require('./controllers/fileController');
const passport = require('passport');

router.get('/', (req, res) => {
  req.flash('danger', 'Yeah');
  req.flash('success', 'Hell yeah!');
  res.render('index', { pageTitle: 'Home' });
});

router.post('/adminRegister', userController.register_user_post);

router.get('/gallery', (req, res) => {
  res.render('gallery', { pageTitle: 'Gallery' });
});

router.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About' });
});

router.get('/blog', (req, res) => {
  res.render('blog', { pageTitle: 'Blog' });
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
router.get('/allImages', fileController.file_list_json);

router.get('/showImage/:fileId', fileController.image_download);

module.exports = router;
