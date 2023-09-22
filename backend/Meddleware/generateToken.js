const jwt = require('jsonwebtoken');

exports.generateToken = (email, id, role) => {
	const token = jwt.sign({ email, id, role }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});
	return token;
};
