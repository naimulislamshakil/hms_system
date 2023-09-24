exports.errorHandler = (err, req, res, next) => {
	console.log(err);
	if (err.code === 11000) {
		const errStatus = err.code || 500;
		const errMsg = 'User Already Exist.';
		res.json({
			success: false,
			status: errStatus,
			message: errMsg,
		});
	} else {
		const errStatus = err.statusCode || 500;
		const errMsg = err.message || 'Something went wrong';
		res.status(errStatus).json({
			success: false,
			status: errStatus,
			message: errMsg,
		});
	}
};
