const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Keranjang = require('../models/Keranjang');

module.exports.getAllKeranjang= (req, res) =>{
	Keranjang.findAll().then(Keranjang=> {
		res.json(Keranjang);
	}).catch((error)=>{
		console.log(error);
	});
}

module.exports.getFindKeranjangId = (req, res) =>{
	Keranjang.findByPk(req.params.id).then(keranjang => {
		res.json(keranjang)
	})
}

module.exports.getFindKeranjangUserId = (req, res) =>{
	Keranjang.findAll({ where: { userId: req.params.userId } }).then(keranjang => {
		res.json(keranjang)
	})
}


module.exports.postAddKeranjang = (req, res) =>{
		jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
						if (authData['roles']=="user") {
						var banyak = req.body.banyak;
						Keranjang.create({
								NamaKeranjang: NamaKeranjang
						})
						.then(Keranjang => {
								console.log(Keranjang.toJSON());
						});
				}else{
					res.sendStatus(403);
				}
			}
		});
}
