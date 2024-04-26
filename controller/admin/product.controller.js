const Product = require("../../model/products.model.BE_24")
// [GET] /admin/products
module.exports.index =  async (req,res) => {
    const products = await Product.find({});
    res.render("admin/page/product/index.pug",{
        pageTitleAdmin : "Trang Chủ ",
        products: products
    });
   
}