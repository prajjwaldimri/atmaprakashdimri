const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const routes = require('./routes');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'source/views'));
app.use(express.static('public'));
app.use(
  session({ secret: 'TestSecret', resave: false, saveUninitialized: false })
);
app.use(bodyParser.urlencoded({ extended: false }));

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
const User = require('./models/user');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// MongoDB connection
mongoose.connect('mongodb://localhost/passport_local_mongoose');

app.use('/', routes);

app.listen('8080', () => {
  console.log('App listening on 8080');
});
