const Service = require('../Service/user.service');
const bcrypt = require('bcrypt');
const { generateToken } = require('../Meddleware/generateToken');

exports.createUserCollaction = async (req, res, next) => {
	try {
		const user = await Service.createUserService(req.body);
		res.status(200).json({
			success: true,
			status: 200,
			message: 'Usae Create Successfully...',
		});
	} catch (error) {
		next(error);
	}
};

exports.loginUserCollaction = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await Service.loginUserService(email);

		if (!user) {
			const error = {
				statusCode: 404,
				message: 'User Not Exist....',
			};
			return next(error);
		}

		const match = bcrypt.compareSync(password, user.password);

		if (!match) {
			const error = {
				statusCode: 404,
				message: 'Invalid credentials....',
			};
			return next(error);
		}

		const token = generateToken(user.email, user._id, user.role);

		res.status(200).json({
			success: true,
			status: 200,
			message: 'Login Successfully...',

			token,
		});
	} catch (error) {
		next(error);
	}
};

exports.userPersistCollaction = async (req, res, next) => {
	try {
		const { id } = req.user;

		const user = await Service.persistService(id);

		const { password, ...other } = user.toObject();

		res.status(200).json({
			success: true,
			status: 200,
			user: other,
		});
	} catch (error) {
		next(error);
	}
};
