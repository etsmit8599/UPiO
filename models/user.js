var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");


var UserSchema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    password: String,
    username: String,
    bags:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bags"
        }

    ],
    cart: Number
    
})
UserSchema.plugin(passportLocalMongoose);

// var User = mongoose.model("User", userSchema);

// function getBag(){
//     currBag =this.bags;
//     return currBag;
// }



// module.exports = getBag;

module.exports = mongoose.model("User", UserSchema);