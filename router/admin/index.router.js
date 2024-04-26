const dashboard = require('./dashboard.router')
const product = require('./product.router')
const sysconfig = require("../../config/system")
module.exports = (app) =>{
    const PATH_DODUY = "/" + sysconfig.prefixAdmin;

    app.use(PATH_DODUY+"/dashboard", dashboard);
    app.use(PATH_DODUY+"/product", product);




}