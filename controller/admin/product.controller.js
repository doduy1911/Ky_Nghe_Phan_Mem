const Product = require("../../model/products.model.BE_24")
const Products1 = require("../../model/products1.model.BE_24")
console.log(Products1)
// [GET] /admin/products
module.exports.index =  async (req,res) => {
    const products = await Products1.find({
        
    });
    console.log(products)
    

    res.render("admin/page/product/index.pug",{
        pageTitleAdmin : "Trang Chủ ",
        products: products
    });
   
}