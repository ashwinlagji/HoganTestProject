var mongoose = require('mongoose');


var schema = mongoose.Schema;

var empSchema = new schema({
    _id: Number,
    name: String,
    designation : String,
    bu :String,
    role: String
});

module.exports = mongoose.model('employee',empSchema);