const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Keranjang = require('../Models/Keranjang');

module.exports.getAll= (req, res) =>{
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
	}).then(Keranjang => {
		res.json(category)
	});
}


module.exports.postAddKeranjang = (req, res) =>{
		jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
				if (error) {
						res.sendStatus(403);
				}else{
					if (authData['roles']=="user") {
						var bukuId = req.body.bukuId;
						Keranjang.create({
								userId: authData['id'],
								bukuId : bukuId
						})
						.then(Keranjang => {
								res.json(Keranjang);
						});
				}else{
					res.sendStatus(403);
				}
			}
		});
}
