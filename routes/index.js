var express       = require("express"),
    passport      = require("passport"),
    User          = require("../models/user"),
    router        = express.Router();
    
router.get("/", function(req,res){
    res.render("landing");
});

//show sign up form
router.get("/register", function(req, res){
   res.render("register"); 
});

//handling user sign up
router.post("/register", function(req, res) {
    req.body.username
    req.body.password
    User.register(new User({username:req.body.username}), req.body.password, function(err, user){
            if(err){
              return res.render("register", {"error": err.message});
            }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "welcome to yelpcamp! "+ user.username);
            res.redirect("/campgrounds");
        });
    });
});
// LOGIN ROUTES
//render login form
router.get("/login", function(req, res){
     res.render("login"); 
});
//middleware

//login logic
router.post("/login", passport.authenticate("local", {
    
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}) ,function(req, res){
    
});

router.get("/logout", function(req, res){
    req.logout();
    req.flash("error","logged you out!");
    res.redirect("/campgrounds");
});

module.exports= router;