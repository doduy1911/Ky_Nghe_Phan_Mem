const express = require('express');
const router = express.Router();
const controllerHome = require("../../controller/client/home.controller.js")
router.get('/',controllerHome.index)



module.exports = router;