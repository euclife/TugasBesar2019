const Buku = require('../Models/Buku');


module.exports.getAllBuku = (req, res) => {
  //Logic tampil data
  // Find all Books
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
  // Find by primary key
	Buku.findByPk(req.params.id).then(buku => {
		res.json(buku)
	})
}		


module.exports.postAddBuku = (req, res) =>{
	//Logic to save data
  
	//Simpan isian form pada variabel di bawah
	var Nama = req.body.name;
	var Halaman = req.body.halaman;
	var Stok = req.body.stok;
	var Harga = req.body.harga;
	var CategoryId = req.body.categoryid;

	//Lemparkan data tersebut ke model product
	Buku.create({
    Nama: 		Nama,
	Halaman:	Halaman,
	Stok:		Stok,
	Harga:		Harga,
	CategoryId:	CategoryId
	  })
	  .then(buku => {
		console.log(buku.toJSON());
	  });
}


module.exports.putIndexBuku = (req, res) =>{
Buku.find({ 
	where: { 
	Id:		req.body.id
			} })
	.on('success', function (buku) {
    // Check if record exists in db
    if (buku) {
      buku.update({
			Nama: 		Nama,
			Halaman:	Halaman,
			Stok:		Stok,
			Harga:		Harga,
			CategoryId:	CategoryId
      })
      .success(function () {})
    }
  })
}


module.exports.putStokBuku = (req, res) =>{
Buku.find({ 
	where: { 
	Id:		req.body.id
			} })
	.on('success', function (buku) {
    // Check if record exists in db
    if (buku) {
      buku.update({
			Stok:		Stok
      })
      .success(function () {})
    }
  })
}


module.exports.deleteBuku = (req, res) =>{
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
}		

module.exports.bukuTerbanyak = (req, res) =>{
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



