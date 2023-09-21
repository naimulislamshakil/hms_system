const Service=require("../Service/user.service")


exports.createUserCollaction = async (req, res, next) =>
{
	try {
		const user=await Service.createUserService(req.body)
		res.send(req.body);
	} catch (error) {
		next(error);
	}
};
