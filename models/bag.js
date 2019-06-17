
var mongoose = require("mongoose");
var Item = require("./items");

var bagSchema = new mongoose.Schema({
    size: Number,
    items: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "items"
        }
    ]
});

var Bag = mongoose.model("Bag", bagSchema);

// function addToCart(){
//     currBag = this.Bag;
//     var j=0;
//     for(i=0;i<currBag.items.length();i++){
//         var p=currBag.items.getPrice();
//         j=j+p;
//     }
//     return j;
// }
// function getNumberOfItems(){
//     var j=0;
//     for(i=0;i<Bag.items.length();i++){
//         j++;
//     }
//     return j;
// }

// module.exports = addToCart;
// module.exports = getNumberOfItems;

module.exports = mongoose.model("Bag", bagSchema);