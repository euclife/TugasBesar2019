module.exports.verifyToken = (req,res) =>{
	const bearerHeader = req.header['authorization'];

	if (typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split('');
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	}else{
		res.sendStatus(403);
	}
}