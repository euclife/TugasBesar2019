var express = require('express')
const auth = require('../Configs/auth');

var router = express.Router()

//Panggil dulu file controllernya
var categoryController = require("../Controllers/Category");


// Set Get Rute Find Product by PK
router.get('/find/:id', categoryController.getFindCategoryId);

// Set Get Rute All Product by name

router.get('/find/nama/:nama', categoryController.getFindCategoryName);

// Set Get Rute All Product by name

router.get('/',  categoryController.getAllCategory);
// Set Post rute
router.post('/',auth.verifyToken, categoryController.postAddCategory);

module.exports = router