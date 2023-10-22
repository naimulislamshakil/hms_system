// const { promisify } = require('util');
const jwt = require('jsonwebtoken');

exports.verifyToken = async (req, res, next) => {
	try {
		const token = req.headers?.authorization?.split(' ')[1];

		if (!token || token === 'null') {
			const error = {
				statusCode: 401,
				message: 'You Are Not Logged In.',
			};
			return next(error);
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decoded;
		next();
	} catch (error) {
		next(error);
	}
};
