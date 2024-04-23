const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    discountPercentage:Number,
    thumbnail:String,
    stock:Number,
    status:String,
    position:Number,
    category:String,
    deleted:Boolean
})

const Product = mongoose.model('Product',productSchema,"Products");
module.exports = Product;