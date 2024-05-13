const Product = require("../../model/products.model.BE_24.js")
const Products1 = require("../../model/products1.model.BE_24.js")
module.exports.index = async  (req,res) => {
    let find = {
        status : "active",
        deleted: false


    }
    const product =  await Products1.find(find).sort({position: 'desc'})

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