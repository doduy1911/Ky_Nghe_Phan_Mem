module.exports.index = (req,res) => {
    res.render("client/page/products/index.pug")
}
module.exports.add = (req,res) => {
    res.send("client/page/products/index.pug")
}