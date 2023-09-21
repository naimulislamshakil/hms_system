const USER = require('../Schema/user.schema');

exports.createUserService = async (data) => {
	const result = await USER.create(data);
	return result;
};
