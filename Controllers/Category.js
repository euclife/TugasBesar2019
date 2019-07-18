const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const Category = require('../Models/Category');

module.exports.getAllCategory= (req, res) =>{
  Category.findAll().then(category=> {
	res.json(category);
  }).catch((error)=>{
	console.log(error);
  });
}

module.exports.getFindCategoryId = (req, res) =>{
  Category.findByPk(req.params.id).then(category => {
	res.json(category)
  })
}

module.exports.getFindCategoryName = (req, res) =>{
  Category.findAll({ where: { NamaCategory: req.params.nama } }).then(category => {
	res.json(category)
  })

}


exports.setCategoryBulk = (req, res) => {
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			if (authData['roles']=="admin") {
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
			}else{
				res.send("Anda Harus Login Menggunakan Admin");
			}
		}
	});
	
}


module.exports.postAddCategory = (req, res) =>{
	jwt.verify(req.token, process.env.SECRETKEY, (error,authData)=>{
		if (error) {
			res.sendStatus(403);
		}else{
			
			var NamaCategory = req.body.NamaCategory;

			Category.create({
				NamaCategory: NamaCategory
			})
			.then(category => {
				res.json(category);
			});
		}
	});
}


