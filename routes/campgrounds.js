var express       = require("express"),
    router        = express.Router(),
    Comment       = require("../models/comment"),
    middleware    = require("../middleware"),
    
    Campground    = require("../models/campground");
    var multer = require('multer');
    var storage = multer.diskStorage({
      filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname);
      }
    });
    var imageFilter = function (req, file, cb) {
        // accept image files only
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    };
    var upload = multer({ storage: storage, fileFilter: imageFilter})
    
    var cloudinary = require('cloudinary');
    cloudinary.config({ 
      cloud_name: 'drq21dc9g', 
      api_key: 751665339373154, 
      api_secret: 'QJm3aAJ_n7z82uV7M9kYS9hyB4k',
    });
    
// INDEX - show all campgrounds
router.get("/",  function(req, res){
    Campground.find({}, function(err, allCampgrounds){
       if(err){
           console.log(err);
       } else{
           res.render("campgrounds/index",{campgrounds:allCampgrounds, currentUser: req.user });
       }
    });
});


// CREATE Route- add new campground to the database
router.post("/", middleware.isLoggedIn, upload.single('image'), function(req, res) {
    cloudinary.uploader.upload(req.file.path, function(result) {
        // add cloudinary url for the image to the campground object under image property
        req.body.campground.image = result.secure_url;
        // add author to campground
        req.body.campground.author = {
          id: req.user._id,
          username: req.user.username
        }
        Campground.create(req.body.campground, function(err, campground) {
          if (err) {
            req.flash('error', err.message);
            return res.redirect('back');
          }
          res.redirect('/campgrounds/' + campground.id);
        });
      });
});

// NEW - show for to create new Campground

router.get("/new",middleware.isLoggedIn, function(req, res) {
    res.render("campgrounds/new");
});

// Show -- display full detail of a perticular campground
router.get("/:id", function(req, res) {
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            console.log(foundCampground);
            res.render("campgrounds/show",{campground:foundCampground});
        }
    });
});


router.get("/:id/edit",middleware.checkCampgroundOwnership, function(req, res) {
    Campground.findById(req.params.id, function(err,foundCampground){
        if(err){
            res.redirect("/campgrounds");
        }else{
            
            res.render("campgrounds/edit", { campground:foundCampground});
        }
    });
});


router.put("/:id",middleware.checkCampgroundOwnership, function(req, res){
    Campground.findByIdAndUpdate( req.params.id , req.body.campground , function(err, UpdateCampground){
        if(err){
            res.redirect("/campgrounds")
        }else{
            req.flash("success", "Updated successfully!");
            res.redirect("/campgrounds/"+ req.params.id );
        }
    });
});

router.delete("/:id",middleware.checkCampgroundOwnership, function(req, res){
    
    Campground.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/campgrounds");
        }else{
            req.flash("success", "Deleted Campground");
            res.redirect("/campgrounds");
        }
    })
});

module.exports= router;
