exports.errorHandler = (err, rq, res, next) => {
	if (err.code === 11000) {
		const errMsg = 'User Already Exist.';
		res.json({
			success: false,
			message: errMsg,
		});
		next();
	} else {
		const errStatus = err.statusCode || 500;
		const errMsg = err.message || 'Something went wrong';
		res.status(errStatus).json({
			success: false,
			status: errStatus,
			message: errMsg,
		});
		next();
	}
};
