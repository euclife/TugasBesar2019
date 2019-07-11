var express = require('express')
var router = express.Router()

//Panggil dulu file controllernya
var categoryController = require("../controllers/category");

// Set Get Rute All Product
router.get('/all', categoryController.getAllCategory);

// Set Get Rute Find Product by PK
router.get('/find/:id', categoryController.getFindCategoryId);

// Set Get Rute All Product by name
router.get('/find/nama/:nama', categoryController.getFindNameCategory);

// Set Get Rute All Product by name
router.get('/init', categoryController.setCategoryBulk);

// Set Post rute
router.post('/', categoryController.postAddCategory);

module.exports = router