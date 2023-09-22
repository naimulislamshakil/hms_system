const USER = require('../Schema/user.schema');

exports.createUserService = async (data) => {
	const result = await USER.create(data);
	return result;
};

exports.loginUserService = async (email) => {
	const result = await USER.findOne({ email });
	return result;
};
