const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookiePerser = require('cookie-parser');
const cloudinary = require('cloudinary');
const fileUploder = require('express-fileupload');
const userRoute = require('./Routes/v1/user.route');
const { errorHandler } = require('./utils/errorHandler');
require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookiePerser());

// add mongoose
mongoose
	.connect('mongodb://localhost:27017')
	.then(() => console.log('Database is connected successfully'))
	.catch((e) => console.log(e));

app.get('/', (req, res) => {
	res.send('<h1>How Are You?</h1>');
});

// route call
app.use('/', userRoute);

app.use('*', (req, res, next) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
	next(`${baseUrl} Not Found!`);
});

app.use(errorHandler);

app.listen(port, () => {
	console.log(`Server is running: ${port}`);
});
