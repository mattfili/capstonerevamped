var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// REQUIRES
var bundle = require('../routes/bundle')


var tagSchema = new mongoose.Schema({
	_id: String,
	tag: String
})

var tag = mongoose.model('tag', tagSchema, 'tag')

module.exports = tag