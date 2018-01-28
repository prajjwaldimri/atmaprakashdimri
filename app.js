const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home' });
});

app.get('/gallery', (req, res) => {
  res.render('Gallery', { pageTitle: 'Gallery' });
});

app.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About' });
});

app.get('/blog', (req, res) => {
  res.render('blog', { pageTitle: 'Blog' });
});

app.get('/adminLogin', (req, res) => {
  res.render('adminLogin', { pageTitle: 'Login for Administrator' });
});

app.listen('8080', () => {
  console.log('App listening on 8080');
});
