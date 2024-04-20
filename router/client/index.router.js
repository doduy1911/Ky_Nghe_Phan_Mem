const product = require('./product.router.js')
const home = require('./home.router.js')
module.exports = (app) =>{

    app.get('/', home);
    app.use('/products',product)


    // app.use('/product',product)
}