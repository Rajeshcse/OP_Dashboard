var express       = require("express"),
    router        = express.Router(),
    Comment       = require("../models/comment"),
    middleware    = require("../middleware"),
    
    Campground    = require("../models/campground");
    
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
router.post("/", middleware.isLoggedIn,  function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var author={
        id:req.user._id,
        username: req.user.username
    }
    var newCampground = {
        name: name,
        image: image,
        description: description,
        author: author
    }
    //campgrounds.push(newCampground);
    Campground.create(newCampground, function(err, Newlycreated){
        if(err){
            console.log(err);
        }else{
            req.flash("success", "Successfully Created Campground");
            res.redirect("/campgrounds");
        }
    })
    
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
