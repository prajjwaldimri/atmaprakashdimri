const Award = require('../models/award');
const fileController = require('./fileController');
const nl2br = require('nl2br');

exports.award_get = (req, res) => {
  res.render('layout', { pageTitle: 'Awards' });
};

exports.award_list = (req, res) => {
  Award.find({}, (err, awards) => {
    if (err) {
      req.flash('danger', 'Error getting awards');
    }
    res.render('dashboard/allAwards', { pageTitle: 'Awards', awards: awards });
  });
};

exports.award_list_json = (req, res) => {
  Award.find({}, (err, awards) => {
    if (err) return res.sendStatus(300);
    res.send(awards);
  });
};

exports.delete_award = (req, res) => {
  Award.findByIdAndRemove(req.params.awardId, (err, doc) => {
    if (err) {
      req.flash('danger', 'Cannot delete award');
    } else {
      req.flash('success', 'Award deleted successfully');
    }
    res.redirect('/adminDashboard/allAwards');
  });
};

exports.new_award_get = (req, res) => {
  res.render('dashboard/newAward', { pageTitle: 'Create a new Award' });
};

exports.new_award_post = async (req, res) => {
  var imageRequest = await fileController.upload_image_multiple(req, res);

  Award.create(
    {
      name: imageRequest.body.awardName,
      time: imageRequest.body.time,
      long_description: nl2br(imageRequest.body.award_long_description),
      imageIds: imageRequest.files.map(file => file.id)
    },
    (err, award) => {
      if (err) {
        req.flash('danger', 'Cannot Save Blog Post');
      } else {
        req.flash('success', 'Blog Post Saved!');
      }
      res.redirect('back');
    }
  );
};

exports.edit_award_get = (req, res) => {
  Award.findById(req.params.awardId, (err, award) => {
    if (err) return res.statusCode(404);
    else {
      res.render('dashboard/editAward', {
        pageTitle: 'Edit existing blog post',
        award: award
      });
    }
  });
};

exports.edit_award_post = async (req, res) => {
  var imageRequest = await fileController.upload_image_multiple(req, res);

  Award.findById(imageRequest.params.awardId, (err, award) => {
    if (err) return res.statusCode(404);
    else {
      if (imageRequest.files === undefined) {
        imageRequest.files = award.imageIds || [];
      }
      award.imageIds.forEach(async imageId => {
        await fileController.delete_image({ params: { fileId: imageId } }, res);
      });
      Award.findByIdAndUpdate(
        imageRequest.params.awardId,
        {
          name: imageRequest.body.awardName,
          time: imageRequest.body.time,
          long_description: nl2br(imageRequest.body.award_long_description),
          imageIds: imageRequest.files.map(file => file.id)
        },
        (err, award) => {
          if (err) {
            req.flash('danger', 'Error updating the award');
          } else {
            req.flash('success', 'Award Updated successfully');
          }
          res.redirect('/adminDashboard/allAwards');
        }
      );
    }
  });
};
