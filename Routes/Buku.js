const express = require('express');
const auth = require('../Configs/auth');

const router = express.Router();

const bukuController = require('../Controllers/Buku');

router.get('/', bukuController.getAllBuku);
router.put('/',auth.verifyToken, bukuController.putIndexBuku);
router.post('/',auth.verifyToken, bukuController.postAddBuku);
router.delete('/',auth.verifyToken, bukuController.deleteBuku);

router.get('/init',auth.verifyToken, bukuController.init);
router.get('/find/:id', bukuController.getFindBukuId);
router.get('/terbaru',auth.verifyToken, bukuController.bukuTerbaru);
router.get('/category/:id',auth.verifyToken, bukuController.bukuCategory);

module.exports = router;