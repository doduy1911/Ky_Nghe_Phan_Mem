const  mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: String,
    deleted :Boolean
   

});
const Products1 = mongoose.model("Products1", productSchema,"Products1")
module.exports = Products1;