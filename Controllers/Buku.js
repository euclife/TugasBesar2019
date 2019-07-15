const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Buku = require('../Models/Buku');

module.exports.getAllBuku = (req, res) => {
	Buku
	.findAll()
	.then((buku) => {
		res.json(buku);
	})
	.catch((error) => {
		console.log(error);
	}) 
}

module.exports.getFindBukuId = (req, res) =>{
	Buku.findByPk(req.params.id).then(buku => {
		res.json(buku)
	})
}       


module.exports.postAddBuku = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				var Nama = req.body.name;
				var Halaman = req.body.halaman;
				var Stok = req.body.stok;
				var Harga = req.body.harga;
				var CategoryId = req.body.categoryid;

				Buku.create({
					Nama:       Nama,
					Halaman:    Halaman,
					Stok:       Stok,
					Harga:      Harga,
					CategoryId: CategoryId
				})
				.then(buku => {
					console.log(buku.toJSON());
				});
			}else{
				res.sendStatus(403);
			}
		}
	});

}

module.exports.putIndexBuku = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Buku.find({ 
					where: { 
						Id:     req.body.id
					} })
				.on('success', function (buku) {
					if (buku) {
						buku.update({
							Nama:       Nama,
							Halaman:    Halaman,
							Harga:      Harga,
							CategoryId: CategoryId
						})
						.success(function () {})
					}
				})
			}else{
				res.sendStatus(403);
			}
		}   
	})
}



module.exports.deleteBuku = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Buku.destroy({
					where: {
						Id: req.params.id
					}
				})
				.then(function (deletedRecord) {
					if(deletedRecord === 1){
						res.status(200).json({message:"Deleted Successfully"});          
					}
					else
					{
						res.status(404).json({message:"Record Not Found"})
					}
				})
				.catch(function (error){
					res.status(500).json(error);
				});
			}else{
				res.sendStatus(403);
			}
		}   
	})
}       

module.exports.bukuTerbanyak = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			Buku.find({
				order: [
				['stok', 'DESC'],
				]
			})
			.then((buku) => {
				res.json(buku);
			})
			.catch((error) => {
				console.log(error);
			}) 
		}   
	})
	
}   




