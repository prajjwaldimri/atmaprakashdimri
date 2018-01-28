const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Hey' });
});

app.listen('8080', () => {
  console.log('App listening on 8080');
});
