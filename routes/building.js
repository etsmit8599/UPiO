var express = require("express");
var router = express.Router();
var User = require("../models/user");
var Item = require("../models/items");
var Bag = require("../models/bag")

router.get("/", function(req,res){
    
    res.render("landing");
});

router.get("/options",function(req,res){
    Item.find({}, function(err, allItems){
        if(err){
            console.log(err);
        }else{
            res.render("options",{items:allItems});
        }
    })
})

router.post("/building", isLoggedIn, function(req,res){
    //get data from form to create new order
    var name = req.body.items.name;
    var price = req.body.items.price;
    var newItem = {name: name, price: price};
    theBag.push(newItem);
    //redirect back to building page
    res.redirect("/building");
});

router.get("/building/:id", isLoggedIn, function(req,res){
    Bag.findById(req.params.id).populate("bags").exec(function(err, foundBag){
        if(err){
            console.log(err);
        }else{

            res.render("new", {bag:foundBag});
        }
    });
});

router.get("/building/new", isLoggedIn, function(req,res){
    exports.myHandler = async (req, res) => {
    const { languages } = req.body
    languages.forEach(language => console.log(language))
}
    res.render("landing");
});

router.get("/building",function(req,res){
    Bag.find({}, function(err, allBags){
        if(err){
            console.log(err);
        }else{
            res.render("building",{bags:allBags});
        }
    })
});


function isLoggedIn(req,res,next){
	if(req.isAuthenticated()){
		return next();
	}else{
		res.redirect('/login');
    }
}

module.exports = router;