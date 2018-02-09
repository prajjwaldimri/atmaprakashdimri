const Blog = require('../models/blog');

exports.blog_list = (req, res) => {
  let blogPosts = [];
  Blog.find({}, (err, docs) => {
    if (err) return res.sendStatus(300);
    blogPosts = docs;
    res.render('dashboard/allBlogPosts', {
      pageTitle: 'List of published blog posts',
      blogPosts: blogPosts
    });
  });
};

exports.edit_blog_post_get = (req, res) => {
  Blog.findById(req.params.blogId, (err, blog) => {
    if (err) return res.statusCode(404);
    else {
      res.render('dashboard/editBlogPost', {
        pageTitle: 'Edit existing blog post',
        blog: blog
      });
    }
  });
};

exports.edit_blog_post_post = (req, res) => {
  Blog.findByIdAndUpdate(
    req.params.blogId,
    {
      title: req.body.blogTitle,
      content: req.body.blogContent
    },
    (err, blog) => {
      if (err) {
        req.flash('danger', 'Error updating the blog');
      } else {
        req.flash('success', 'Blog Updated successfully');
      }
      res.redirect('/adminDashboard/allBlogPosts');
    }
  );
};

exports.delete_blog_post = (req, res) => {
  Blog.findByIdAndRemove(req.params.blogId, (err, doc) => {
    if (err) {
      req.flash('danger', 'Cannot delete blog');
    } else {
      req.flash('success', 'Blog deleted successfully');
    }
    res.redirect('/adminDashboard/allBlogPosts');
  });
};

exports.new_blog_post_get = (req, res) => {
  res.render('dashboard/newBlogPost', { pageTitle: 'Admin Dashboard' });
};

exports.new_blog_post_post = (req, res) => {
  if (!req.body) return res.sendStatus(400);

  Blog.create(
    {
      title: req.body.blogTitle,
      content: req.body.blogContent
    },
    (err, blogPost) => {
      if (err) {
        req.flash('danger', 'Cannot Save Blog Post');
      } else {
        req.flash('success', 'Blog Post Saved!');
      }
      res.redirect('back');
    }
  );
};
