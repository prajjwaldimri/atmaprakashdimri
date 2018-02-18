const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const compression = require('compression');
const passport = require('passport');
const routes = require('./routes');
const adminDashboardRoutes = require('./adminDashboardRoutes');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'source/views'));
app.use(express.static('public'));
app.use(
  session({
    secret: 'cat on a mat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('Keyboard cat'));
app.use(require('flash')());

// Passport Config
app.use(passport.initialize());
app.use(passport.session());
const User = require('./models/user');
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
require('./models/blog');

app.use(compression());

// MongoDB connection
// require('mongoose').connect(
//   process.env.MONGO_DB_URI || 'mongodb://localhost/passport_local_mongoose'
// );

app.use('/', routes);
app.use('/adminDashboard', adminDashboardRoutes);

app.listen(process.env.PORT || '8080', () => {
  console.log('App listening on 8080');
});
