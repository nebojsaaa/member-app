const mongoose = require('mongoose');

const MongoDB = {
	connect() {
		mongoose.connect('mongodb://localhost/membersDB', { useNewUrlParser: true })
		.then((res) => {
			console.log('Database connection is succesful');
		}, err => {
			console.log('Error when connecting to the database: ', err);
		});
	},

	debug(state) {
		mongoose.set('debug', state);
	}
}

module.exports = MongoDB;
