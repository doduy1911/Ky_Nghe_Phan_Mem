const express = require('express');
const router = express.Router();
const controllerproduct = require('../../controller/admin/product.controller.js') 
 


router.get('/',controllerproduct.index)
router.get('/change-status/:status/:id',controllerproduct.changeStatus)


module.exports = router; 