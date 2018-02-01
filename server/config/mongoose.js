var mongoose = require("mongoose"),
	db_name  = "bucket";

mongoose.connect(`mongodb://localhost/${db_name}`);