const router = require('express').Router();
const userController = require('./controllers/userController');
const fileController = require('./controllers/fileController');
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

router.get('/blog', (req, res) => {
  res.render('blog', { pageTitle: 'Blog' });
});

router.get('/adminLogin', (req, res) => {
  res.render('/adminLogin', { pageTitle: 'Admin Login' });
});

router.post('/adminLogin', passport.authenticate('local'), (req, res) => {
  res.redirect('/adminDashboard/editProfile');
});

// AJAX Routes
router.get('/allImages', fileController.file_list_json);

module.exports = router;
