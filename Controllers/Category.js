//Panggil Model Untuk di gunakan 
const Category = require('../models/category');

module.exports.getAllCategory= (req, res) =>{
  //Logic tampil data
  // Find all product
	Category.findAll().then(category=> {
	  res.json(category);
	}).catch((error)=>{
		console.log(error);
	});
}

module.exports.getFindCategoryId = (req, res) =>{
  // Find by primary key
	Category.findByPk(req.params.id).then(category => {
		res.json(category)
	})

}

module.exports.getFindCategoryName = (req, res) =>{
  // Find by name
	Category.findAll({ where: { NamaCategory: req.params.nama } }).then(category => {
		res.json(category)
	})

}


exports.setCategoryBulk = (req, res, next) => {
	Category.bulkCreate([
		{
		NamaCategory : 'Drama'
		},
		{
		NamaCategory : 'Horror'
		},
		{
		NamaCategory : 'Comedy'
		},
		{
		NamaCategory : 'Scifi'
		},
		{
		NamaCategory : 'R18'
		}
		]).then(category => {
		res.send('data berhasil disimpan');
		})
}
module.exports.postAddCategory = (req, res) =>{
	//Logic to save data
  
	//Simpan isian form pada variabel di bawah
	var NamaCategory = req.body.name;

	//Lemparkan data tersebut ke model product
	Category.create({
    NamaCategory: NamaCategory
	  })
	  .then(category => {
		console.log(category.toJSON());
	  });
}