exports.errorHandler = (err, rq, res, next) => {
	console.log(err);
	if (err.code === 11000) {
		const errMsg = 'User Already Exist.';
		res.json({
			success: false,
			message: errMsg,
		});
	} else {
		console.log('object');
		const errStatus = err.statusCode || 500;
		const errMsg = err.message || 'Something went wrong';
		res.status(errStatus).json({
			success: false,
			status: errStatus,
			message: errMsg,
		});
	}
};
