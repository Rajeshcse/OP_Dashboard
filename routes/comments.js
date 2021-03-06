var express = require("express"),
  router = express("router"),
  Comment = require("../models/comment"),
  middleware = require("../middleware"),
  Campground = require("../models/campground");

router.get("/campgrounds/:id/comments/new", middleware.isLoggedIn, function(
  req,
  res
) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
    } else {
      res.render("comments/new", { campground: campground });
    }
  });
});

router.post("/campground/:id/comments", middleware.isLoggedIn, function(
  req,
  res
) {
  Campground.findById(req.params.id, function(err, campground) {
    if (err) {
      console.log(err);
      res.redirect("/campgrounds");
    } else {
      Comment.create(req.body.comment, function(err, comment) {
        if (err) {
          console.log(err);
        } else {
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          campground.comments.push(comment);
          campground.save();
          req.flash("success", "Successfully added comment");
          res.redirect("/campgrounds/" + campground._id);
        }
      });
    }
  });
});

router.get(
  "/campgrounds/:id/comments/:comment_id/edit",
  middleware.checkCommentOwnership,
  function(req, res) {
    Comment.findById(req.params.comment_id, function(err, foundCampground) {
      if (err) {
        res.render("back");
      } else {
        res.render("comments/edit", {
          campground_id: req.params.id,
          comment: foundCampground
        });
      }
    });
  }
);

router.put(
  "/campgrounds/:id/comments/:comment_id",
  middleware.checkCommentOwnership,
  function(req, res) {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(
      err,
      updatedComment
    ) {
      if (err) {
        res.redirect("back");
      } else {
        res.redirect("/campgrounds/" + req.params.id);
      }
    });
  }
);

router.delete(
  "/campgrounds/:id/comments/:comment_id",
  middleware.checkCommentOwnership,
  function(req, res) {
    Comment.findByIdAndRemove(req.params.comment_id, function(err) {
      if (err) {
        res.redirect("back");
      } else {
        req.flash("success", "comment deleted");
        res.redirect("/campgrounds/" + req.params.id);
      }
    });
  }
);

module.exports = router;
