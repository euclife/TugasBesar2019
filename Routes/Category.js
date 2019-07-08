var express = require('express')
var router = express.Router()

//Panggil dulu file controllernya
var categoryController = require("../controllers/category");

// Set Get Rute All Product
router.get('/', categoryController.getAllCategory);

// Set Get Rute Find Product by PK
router.get('/query/find/:id', categoryController.getFindCategoryId);

// Set Get Rute All Product by name
router.get('/query/find/NamaCategory/:nama', CategoryController.getFindNameCategory);

// Set Get Rute All Product by name
router.get('/init', categoryController.setCategoryBulk);

// Set Get Rute Form
router.get('/add', categoryController.getForm);

// Set Post rute
router.post('/', categoryController.postAddCategory);

module.exports = router