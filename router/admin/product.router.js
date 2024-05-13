const express = require('express');
const router = express.Router();
const multer  = require('multer')
const storageMulterHelper = require('../../helper/storageMulter.js') 
const storage = storageMulterHelper();
const upload = multer({ storage: storage })

const controllerproduct = require('../../controller/admin/product.controller.js') 
 
const vanidate = require('../../vanidates/admin/product.vanidates.js')


router.get('/',controllerproduct.index)
router.patch("/change-status/:status/:id",controllerproduct.changeStatus);
router.patch("/change-multi",controllerproduct.changeMulti);
router.delete("/delete/:id",controllerproduct.deleteItem);
router.get("/create",controllerproduct.create);

router.post(
    "/create", 
    upload.single('thumbnail'),
    vanidate.createPost,
    controllerproduct.createPost
);






module.exports = router; 