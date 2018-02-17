const Blog = require('../models/blog');
const fileController = require('./fileController');

exports.blog_list = (req, res) => {
  Blog.find({})
    .populate('author')
    .exec((err, docs) => {
      if (err) return res.sendStatus(300);
      res.render('dashboard/allBlogPosts', {
        pageTitle: 'List of published blog posts',
        blogPosts: docs
      });
    });
};

exports.blog_list_json = (req, res) => {
  Blog.find({})
    .populate('author')
    .exec((err, blogPosts) => {
      if (err) {
        req.flash('danger', err);
        res.redirect('back');
      }
      res.json(blogPosts);
    });
};

exports.blog_show = (req, res) => {
  Blog.findById(req.params.blogId, (err, blog) => {
    if (err) {
      req.flash('danger', err);
      res.redirect('back');
    }
    res.render('blog', { pageTitle: blog.title, blog: blog });
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

exports.edit_blog_post_post = async (req, res) => {
  var imageRequest = await fileController.upload_image(req, res);
  Blog.findById(imageRequest.params.blogId, (err, blog) => {
    if (err) return res.statusCode(404);
    else {
      if (imageRequest.file === undefined) {
        imageRequest.file = { id: blog.heroImageId || '' };
      }
      Blog.findByIdAndUpdate(
        imageRequest.params.blogId,
        {
          title: imageRequest.body.blogTitle,
          content: imageRequest.body.blogContent,
          heroImageId: imageRequest.file.id
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
    }
  });
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
      content: req.body.blogContent,
      // Currently only admin can be the author
      author: req.user._id
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
