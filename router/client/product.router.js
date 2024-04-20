const express = require('express');
const router = express.Router();

const controllerProduct = require("../../controller/client/product.controller.js")
router.get('/',controllerProduct.index)
router.get('/add',controllerProduct.add)

module.exports = router;