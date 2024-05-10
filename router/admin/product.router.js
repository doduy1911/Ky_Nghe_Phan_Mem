const express = require('express');
const router = express.Router();
const controllerproduct = require('../../controller/admin/product.controller.js') 
 


router.get('/',controllerproduct.index)
router.patch("/change-status/:status/:id",controllerproduct.changeStatus);
router.patch("/change-multi",controllerproduct.changeMulti);
router.delete("/delete/:id",controllerproduct.deleteItem);
router.get("/create",controllerproduct.create);

router.post("/create",controllerproduct.createPost);






module.exports = router; 