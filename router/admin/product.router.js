const express = require('express');
const router = express.Router();
const controllerproduct = require('../../controller/admin/product.controller.js') 

router.get('/',controllerproduct.index)

module.exports = router; 