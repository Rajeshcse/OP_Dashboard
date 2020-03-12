var Campground = require("../models/campground");
var Comment = require("../models/comment");
var Gok = require("../models/gok");
var Xray = require("../models/xray");
var Metadata = require("../models/metadata");
var Series = require("../models/series");

// all the middleare goes here
var middlewareObj = {};

//  ITB team ownership
middlewareObj.checkCampgroundOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, foundCampground) {
      if (err) {
        req.flash("error", "Team metrics not found");
        res.redirect("back");
      } else {
        // does user own the campground?
        if (
          foundCampground.author.id.equals(req.user._id) ||
          req.user.isAdmin
        ) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back");
  }
};

//  GOK team ownership
middlewareObj.checkGokTeamOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Gok.findById(req.params.id, function(err, foundGok) {
      if (err) {
        req.flash("error", "Team metrics  not found");
        res.redirect("back");
      } else {
        // does user own the campground?
        if (foundGok.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back");
  }
};

//  Xray team ownership
middlewareObj.checkxrayTeamOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Xray.findById(req.params.id, function(err, foundXray) {
      if (err) {
        req.flash("error", "Team metrics  not found");
        res.redirect("back");
      } else {
        // does user own the campground?
        if (foundXray.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back");
  }
};

//  Metadata team ownership
middlewareObj.checkmetadataTeamOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Metadata.findById(req.params.id, function(err, foundMetadata) {
      if (err) {
        req.flash("error", "Team metrics  not found");
        res.redirect("back");
      } else {
        // does user own the campground?
        if (foundMetadata.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", " You don't have permission to do that ");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back");
  }
};

//  Series team ownership
middlewareObj.checkseriesTeamOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Series.findById(req.params.id, function(err, foundSeries) {
      if (err) {
        req.flash("error", "Team metrics  not found");
        res.redirect("back");
      } else {
        // does user own the campground?
        if (foundSeries.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", " You don't have permission to do that ");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back");
  }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
      if (err) {
        res.redirect("back");
      } else {
        // does user own the comment?
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          req.flash("error", "You don't have permission to do that");
          res.redirect("back");
        }
      }
    });
  } else {
    req.flash("error", "You need to be logged in to do that");
    res.redirect("back");
  }
};

middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "You need to be logged in to do that");
  res.redirect("/login");
};

module.exports = middlewareObj;
