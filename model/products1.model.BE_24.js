const mongoose = require("mongoose");
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,
    thumbnail: String,
    status: String,
    position: String,
    deleted: {
        type: Boolean,
        default: false

    },
    deleteAt: Date,
    slug: { type: String, slug: "title",unique: true}



},
    {
        timestamps: true
    });
const Products1 = mongoose.model("Products1", productSchema, "Products1")
module.exports = Products1;