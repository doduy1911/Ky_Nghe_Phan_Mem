const express = require('express');
const router = express.Router();
const controllerDashboard = require('../../controller/admin/dashboard.controller.js') 

router.get('/',controllerDashboard.index)

module.exports = router; 