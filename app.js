var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var localStrategy = require("passport-local");
var User = require("./models/user");
var Item = require("./models/items");
var Bag = require("./models/bag")
var seedDB = require("./models/seeds")

var authRoutes = require("./routes/authorize");
var buildRoutes = require("./routes/building");

seedDB();

//-----PASSPORT CONFIG-----//

app.use(require("express-session")({
	secret: "death by rolling couch",
	resave: false,
	saveUninitialized: false
}));

app.use(passport.initialize());   
app.use(passport.session());       
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.use(express.static('./public'));


// --------DATABASE STUFF---------//

mongoose.connect('mongodb+srv://etsmit8599:Boostaru13524!@cluster0-a44ah.mongodb.net/test?retryWrites=true&w=majority', { 
	useNewUrlParser: true
 }).then(()=> {
	 console.log("connected to db");
 }).catch(err => {
	 console.log("error:",err.message);
 });
mongoose.set('useCreateIndex', true);

//-----------SERVER STUFF------------//


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");



function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}else{
		res.redirect('/login');
    }
}

app.use(authRoutes);
app.use(buildRoutes);

app.listen(3000, function(req, res){
    console.log("The yelpCame server has started");
});