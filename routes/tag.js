var express = require('express');
var router = express.Router();

// REQUIRES
var tag = require('../model/mongoose.tags')

// ROUTES

router.get('/tag', function (req, res, next) {
	var query = tag.find();

	query.exec(function(err, data) {
		if (err) return next(err)
		console.log(data)
		res.send(data)
	})
})




module.exports = router