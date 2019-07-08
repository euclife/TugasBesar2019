const express = require('express');

const router = express.Router();

const bukuController = require('../Controllers/Buku');

router.get('/', bukuController.getAllBuku);
router.get('/find/:id', bukuController.getFindBukuId);
router.get('/terbanyak', bukuController.bukuTerbanyak);
router.put('/', bukuController.putIndexBuku);
router.put('/stok', bukuController.putStokBuku);
router.post('/', bukuController.postAddBuku);
router.delete('/', bukuController.deleteBuku);

module.exports = router;