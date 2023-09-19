const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			min: 5,
		},
		role: {
			type: String,
			enum: ['Seller', 'Admin'],
			default: 'Seller',
		},
	},
	{ timestamps: true }
);

const USER = mongoose.model('User', userSchema);

module.exports = USER;
