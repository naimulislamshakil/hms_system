const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookiePerser = require('cookie-parser');
const cloudinary = require('cloudinary');
const fileUploder = require('express-fileupload');
require('dotenv').config();

app.get('/', (req, res) => {
	res.send('<h1>How Are You?</h1>');
});

app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(port, () => {
	console.log(`Server is running: ${port}`);
});
