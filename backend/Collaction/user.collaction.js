const Service=require("../Service/user.service")


exports.createUserCollaction = async (req, res, next) =>
{
	try {
		const user=await Service.createUserService(req.body)
        res.status(200).json({
            status: "Success",
            message:"Usae Create Successfully..."
        })
	} catch (error) {
		next(error);
	}
};
