const router = require('express').Router();
const Blog = require('./models/blog');

router.use('/', (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect('/');
  }
});

router.get('/allBlogPosts', (req, res) => {
  let blogPosts = [];
  Blog.find({}, (err, docs) => {
    if (err) return res.sendStatus(300);
    blogPosts = docs;
    res.render('dashboard/allBlogPosts', {
      pageTitle: 'List of published blog posts',
      blogPosts: blogPosts
    });
  });
});

router.get('/allUploadedFiles', (req, res) => {
  res.render('dashboard/allUploadedFiles', {
    pageTitle: 'List of uploaded files on server'
  });
});

router.get('/editBlogPost/:blogId', (req, res) => {
  Blog.findById(req.params.blogId, (err, blog) => {
    if (err) return res.statusCode(404);
    else {
      res.render('dashboard/editBlogPost', {
        pageTitle: 'Edit existing blog post',
        blog: blog
      });
    }
  });
});

router.post('/editBlogPost/:blogId', (req, res) => {
  Blog.findByIdAndUpdate(
    req.params.blogId,
    {
      title: req.body.blogTitle,
      content: req.body.blogContent
    },
    (err, blog) => {
      if (err) {
        req.flash('error', 'Error updating the blog');
      } else {
        req.flash('success', 'Blog Updated successfully');
      }
      res.redirect('/adminDashboard/allBlogPosts');
    }
  );
});

router.get('/deleteBlogPost/:blogId', (req, res) => {
  Blog.findByIdAndRemove(req.params.blogId, (err, doc) => {
    if (err) {
      req.flash('error', 'Cannot delete blog');
    } else {
      req.flash('success', 'Blog deleted successfully');
    }
    res.redirect('/adminDashboard/allBlogPosts');
  });
});

router.get('/editProfile', (req, res) => {
  res.render('dashboard/editProfile', { pageTitle: 'Edit your Profile' });
});

router.get('/editPassword', (req, res) => {
  res.render('dashboard/editPassword', { pageTitle: 'Change Your Password' });
});

router.post('/editPassword', (req, res) => {
  if (!req.body) return res.sendStatus(400);

  if (req.body.newPassword !== req.body.confirmNewPassword) {
    req.flash('error', 'New and Confirm Passwords are not same');
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
});

router.get('/newBlogPost', (req, res) => {
  // if (!req.user) {
  //   res.redirect('/');
  // }
  res.render('dashboard/newBlogPost', { pageTitle: 'Admin Dashboard' });
});

router.post('/newBlogPost', (req, res) => {
  if (!req.body) return res.sendStatus(400);

  Blog.create(
    {
      title: req.body.blogTitle,
      content: req.body.blogContent
    },
    (err, blogPost) => {
      if (err) {
        req.flash('error', 'Cannot Save Blog Post');
      } else {
        req.flash('success', 'Blog Post Saved!');
      }
      res.redirect('back');
    }
  );
});

router.get('/newFileUpload', (req, res) => {
  res.render('dashboard/newFileUpload', { pageTitle: 'Upload a file' });
});

router.get('/newImageUpload', (req, res) => {
  res.render('dashboard/newImageUpload', { pageTitle: 'Upload an image' });
});

module.exports = router;
