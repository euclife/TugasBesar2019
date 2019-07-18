const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const Buku = require('../Models/Buku');

module.exports.init = (req,res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Buku.bulkCreate([
			{
				Nama : 'The Lost Art of Closing',
				Halaman : 160,
				Harga : 82240,
				Stok : 11,
				CategoryId : 1
			},
			{
				Nama : 'The Calling',
				Halaman : 200,
				Harga : 57600,
				Stok : 32,
				CategoryId : 1
			},
			{
				Nama : 'Terapi Kebiasaaan Positif',
				Halaman : 160,
				Harga : 84150,
				Stok : 22, 
				CategoryId : 2
			},
			{
				Nama : 'Jack Ma: Jurus Sukses',
				Halaman : 160,
				Harga : 39950,
				Stok : 21, 
				CategoryId : 2
			},
			{
				Nama : 'Perihal Cinta Kita Semua Pemula',
				Halaman : 160,
				Harga : 84150,
				Stok : 22, 
				CategoryId : 2
			},
			]).then(category => {
				res.send('data berhasil disimpan');
			})
			}   
		}
	})
}

module.exports.getAllBuku = (req, res) => {
	Buku
	.findAll()
	.then((buku) => {
		res.json(buku);
	})
	.catch((error) => {
		res.json(error);
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
				var CategoryId = req.body.categoryId;
				console.log(CategoryId);
				Buku.create({
					Nama:       Nama,
					Halaman:    Halaman,
					Stok:       Stok,
					Harga:      Harga,
					CategoryId: CategoryId
				})
				.then(buku => {
					res.json(buku)
				});
			}else{
				res.send('Anda Harus Login Sebagai Admin');
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
				var Id = req.body.id;
				var Nama = req.body.name;
				var Halaman = req.body.halaman;
				var Harga = req.body.harga;
				var CategoryId = req.body.categoryId;

				Buku.update({
  								Nama:       Nama,
								Halaman:    Halaman,
								Harga:      Harga,
								CategoryId: CategoryId
						}, {
  						where: { 
								Id:    Id
								}
						}).then(buku => {
							res.json("Data Berhasil di Perbaharui");
						});
			}
			else{
				res.sendStatus(403);
			}
		}
	}
)}



module.exports.deleteBuku = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
				Buku.destroy({
					where: {
						Id: req.body.id
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

module.exports.bukuTerbaru = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			Buku.findOne({
				order: [
				['createdAt', 'DESC'],
				]
			})
			.then((buku) => {
				res.json(buku);
			})
			.catch((error) => {
				res.json(error);
			}) 
		}   
	})
} 

//Mencati Buku Berdasarkan Kategori

module.exports.bukuCategory = (req, res) =>{
	var categoryId = req.params.id;
	Buku.findAll({
		where: [
		['categoryId', categoryId],
		]
	})
	.then((buku) => {
		res.json(buku);
	})
	.catch((error) => {
		res.json(error);
	}) 
}   
	 