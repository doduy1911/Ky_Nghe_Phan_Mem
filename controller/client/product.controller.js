const Product = require("../../model/products.model.BE_24.js")
module.exports.index = async  (req,res) => {
    const product =  await Product.find()

    const newProducts = product.map(item => {
        item.priceNew = ((item.price * (100 - item.discountPercentage)) / 100).toFixed(0);
        return item;
    })
    
    
    res.render("client/page/products/index.pug",{
        pageTitle:"Danh Sach San Pham",
        product: newProducts,
        
    })
}
module.exports.add = (req,res) => {
    res.send("client/page/products/index.pug")
}