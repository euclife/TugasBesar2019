const express = require('express');
const auth = require('../Configs/auth');

const router = express.Router();

const bukuController = require('../Controllers/Buku');

router.get('/', bukuController.getAllBuku);
router.put('/',auth.verifyToken, bukuController.putIndexBuku);
router.post('/',auth.verifyToken, bukuController.postAddBuku);
router.delete('/',auth.verifyToken, bukuController.deleteBuku);
router.put('/stok',auth.verifyToken, bukuController.putStokBuku);

router.get('/find/:id', bukuController.getFindBukuId);
router.get('/terbanyak',auth.verifyToken, bukuController.bukuTerbanyak);

module.exports = router;