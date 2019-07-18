const express = require('express');
const auth = require('../Configs/auth');

const router = express.Router();

const keranjangController = require('../Controllers/Keranjang');

router.get('/', keranjangController.getAll);
router.post('/',auth.verifyToken, keranjangController.postAddKeranjang);


module.exports = router;

