const express = require('express');
const router = express.Router();
const controllerproduct = require('../../controller/admin/product.controller.js') 
 


router.get('/',controllerproduct.index)
router.patch("/change-status/:status/:id",controllerproduct.changeStatus);
router.patch("/change-multi",controllerproduct.changeMulti);



module.exports = router; 