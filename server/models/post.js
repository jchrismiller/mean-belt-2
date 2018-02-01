var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	
	title: {
		type: String,
		required: [true, 'Title is required.']
	},

	description: {
		type: String
	},

	userid: {type: mongoose.Schema.Types.ObjectId, ref: "User"},

	_user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},

	answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],


}, { timestamps: true, usePushEach: true });

module.exports = mongoose.model('Post', PostSchema);

