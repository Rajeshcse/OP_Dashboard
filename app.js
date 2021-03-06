var express = require("express"),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  flash = require("connect-flash"),
  Campground = require("./models/campground"),
  Comment = require("./models/comment"),
  Gok = require("./models/gok"),
  Xray = require("./models/xray"),
  Metadata = require("./models/metadata"),
  Series = require("./models/series"),
  sjoItb = require("./models/sjoItb"),
  jpItb = require("./models/jpitb"),
  cnitb = require("./models/cnItb"),
  cnmetadata = require("./models/cnmetadata"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  User = require("./models/user"),
  app = express(),
  methodOverride = require("method-override");

var commentRoutes = require("./routes/comments"),
  compgroundRoutes = require("./routes/campgrounds"),
  gokRoutes = require("./routes/gokMetrics"),
  xrayRoutes = require("./routes/xrays"),
  metadataRoutes = require("./routes/metadatas"),
  seriesRoutes = require("./routes/series"),
  sjoitbRoutes = require("./routes/sjoItb"),
  jpitbRoutes = require("./routes/jpItb"),
  cnitbRoutes = require("./routes/cnItb"),
  cnmetadataRoutes = require("./routes/cnmetadata"),
  indexRoutes = require("./routes/index");

//seedDB();
// mongoose.connect("mongodb://localhost:27017/win", { useNewUrlParser: true });
//rparaman:<password>@cluster0-zugga.mongodb.net/test?retryWrites=true&w=majority

mongoose
  .connect(
    "mongodb+srv://rparaman:Geek123@cluster0-zugga.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch(err => {
    console.log("ERROR:", err.message);
  });

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(flash());
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));

// passport config
app.use(
  require("express-session")({
    secret: "Dogs are so lovely and cutest beings in this world! ",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Auth Routes

app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// routes
app.use("/", indexRoutes);
app.use("/campgrounds", compgroundRoutes);
app.use("/xray", xrayRoutes);
app.use("/metadata", metadataRoutes);
app.use("/gok", gokRoutes);
app.use("/series", seriesRoutes);
app.use("/sjoitb", sjoitbRoutes);
app.use("/cnitb", cnitbRoutes);
app.use("/cnmetadata", cnmetadataRoutes);
app.use("/jpitb", jpitbRoutes);

app.use(commentRoutes);

// COMMENT routes
var port = process.env.PORT || 5000;
app.listen(port || process.env.PORT, process.env.IP, function() {
  console.log("OP  server is running!" + port);
});
