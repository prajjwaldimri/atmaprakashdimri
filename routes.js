const router = require('express').Router();
const User = require('./models/user');
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home' });
});

router.get('/adminDashboard', (req, res) => {
  if (req.user) {
    res.render('adminDashboard', { pageTitle: 'Admin Dashboard' });
  } else {
    res.redirect('/');
  }
});

router.post('/adminRegister', (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    err => {
      if (err) {
        console.log(`Error while Registering: ${err}`);
        return next(err);
      }
      res.redirect('/adminDashboard');
    }
  );
});

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
  res.render('adminLogin', { pageTitle: 'Login for Administrator' });
});

router.post('/adminLogin', passport.authenticate('local'), (req, res) => {
  res.redirect('/adminDashboard');
});

module.exports = router;
