// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Skill', {
	name:    String,
	rating:  { type: Number, min: 1, max: 10 },
});
