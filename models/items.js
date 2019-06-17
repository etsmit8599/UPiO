

var mongoose = require("mongoose");
var Bag = require("./bag");

var itemSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: Number
});

var Item = mongoose.model("Item", itemSchema);

// function getPrice(){
//     Price = Item.price;
//     return Price;
// }

// function addToBag(Bag){
//     currItem = this.Item;
//     Bag.items.push(currItem);
// }

// module.exports= addToBag;
// module.exports= getPrice;

module.exports = mongoose.model("Item", itemSchema);