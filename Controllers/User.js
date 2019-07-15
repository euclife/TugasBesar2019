const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const User = require('../Models/User');


module.exports.postRegister = (req,res) =>{

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    User 
        .findOrCreate({
            where:{
                email: req.body.email
            },
            defaults:{
                username: req.body.username,
                email: req.body.email,
                password: hash,
                roles: req.body.roles
            }
        })
        .then((user)=>{
            res.json(user);
        })
        .catch((error)=>{
            console.log(error);
        })
}

module.exports.postLogin = (req,res) =>{
    User.findOne({
        where:{
            username: req.body.username
        }
    }).then(user=>{
        if(!user){
            res.status(400).send('Username Tidak Ditemukan');
        }else{
            bcrypt.compare(req.body.password, user.get('password'),function (err, isMatch){
                if(err){
                    res.status(400).send('Password Error');
                }
                if (isMatch) {
                    jwt.sign({id:user.get('id')}, process.env.SECRETKEY, (error, token)=>{
                        res.json({token:token});
                    })
                }else{
                    res.status(400).send('Password Salah')
                }
            })
        }
    })
}



