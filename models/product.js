
var mongoose = require("mongoose");
var Bag = require("./bag");

var productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

var Product = mongoose.model("Product", productSchema);


module.exports = mongoose.model("Product", productSchema);