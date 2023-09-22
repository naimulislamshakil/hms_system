const Service = require('../Service/user.service');
const 

exports.createUserCollaction = async (req, res, next) => {
	try {
		const user = await Service.createUserService(req.body);
		res.status(200).json({
			status: 'Success',
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

		const match=

		res.send(email);
	} catch (error) {
		next(error);
	}
};
