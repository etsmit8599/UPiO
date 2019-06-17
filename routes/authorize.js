var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//-----AUTHORIZE ROUTES-----//

//show form to register
router.get("/register", function(req,res){
	res.render("register");
});

//handling user signup
router.post("/register", function(req,res){
	var newUser = new User({username: req.body.username});
	var password = req.body.password;
	User.register(newUser, password, function(err,user){
		if(err){
			console.log(err);
			return res.render('register');
		}
		passport.authenticate('local')(req,res,function(){
			res.redirect("/");
	   
		});
    });
});

//Login routes
//login form
router.get("/login", function(req,res){
	res.render('login');
});

//login logic
router.post("/login", passport.authenticate('local', {
	successRedirect: 'building',
	failureRedirect: 'login'
}), function(req,res){

});

//logout stuff
router.get("/logout", function(req,res){
	req.logout();
	res.redirect('/');
});

//-------------------------------------------------------------------
function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}else{
		res.redirect('/login');
    }
}

module.exports = router; 
