const mongoose = require('mongoose');

const MemberSchema = mongoose.Schema({
	name: {
		type: String,
		required: false
	}, 
	email: {
		type: String,
		required: false
	}, 
	status: {
		type: String,
		required: false
	}, 
})  


module.exports = mongoose.model('Members', MemberSchema);
