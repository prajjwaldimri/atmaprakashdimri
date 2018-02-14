const User = require('../models/user');
const fileController = require('../controllers/fileController');

exports.about_details = (req, res) => {
  User.findOne({ username: 'dimri_apr' }, (err, user) => {
    if (err) {
      req.flash('danger', 'Unable to find user details');
      console.log(err);
    }
    user._id = null;
    user.username = undefined;
    res.json(user);
  });
};

exports.edit_profile_get = (req, res) => {
  User.findById(req.user._id, (err, user) => {
    if (err) return res.statusCode(404);
    else {
      res.render('dashboard/editProfile', {
        pageTitle: 'Edit profile',
        user: user
      });
    }
  });
};

exports.edit_profile_post = (req, res) => {
  User.findByIdAndUpdate(
    req.user._id,
    {
      fullName: req.body.fullName,
      shortName: req.body.shortName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      bio: req.body.bio
    },
    (err, blog) => {
      if (err) {
        req.flash('danger', 'Error updating profile');
      } else {
        req.flash('success', 'Profile Updated successfully');
      }
      res.redirect('back');
    }
  );
};

exports.edit_profile_image_get = (req, res) => {
  res.render('dashboard/editProfileImage', {
    pageTitle: 'Upload your profile image',
    profileImageId: req.user.profileImageId
  });
};

exports.edit_profile_image_post = async (req, res) => {
  var profileImageId = await fileController.upload_image(req, res);
  User.findByIdAndUpdate(
    req.user._id,
    {
      profileImageId: profileImageId
    },
    (err, blog) => {
      if (err) {
        req.flash('danger', 'Error updating profile');
      } else {
        req.flash('success', 'Profile Updated successfully');
      }
      res.redirect('back');
    }
  );
};

exports.edit_password_get = (req, res) => {
  res.render('dashboard/editPassword', { pageTitle: 'Change Your Password' });
};

exports.edit_password_post = (req, res) => {
  if (!req.body) return res.sendStatus(400);

  if (req.body.newPassword !== req.body.confirmNewPassword) {
    req.flash('danger', 'New and Confirm Passwords are not same');
    res.redirect('back');
  }

  req.user.changePassword(
    req.body.currentPassword,
    req.body.newPassword,
    function (error) {
      if (error) return res.sendStatus(400);
      req.flash('success', 'Successfully changed password');
      res.redirect('back');
    }
  );
};

exports.register_user_post = (req, res, next) => {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    err => {
      if (err) {
        console.log(`Error while Registering: ${err}`);
        return next(err);
      }
      res.redirect('/adminDashboard/editPassword');
    }
  );
};
