// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Education', {
	school:  String,
	type:    String,
	degree:  String,
	courses: [String],
	achievements : [String]
});
