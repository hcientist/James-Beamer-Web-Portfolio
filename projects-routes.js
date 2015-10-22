'use strict';
var express = require('express');

var router  = express.Router();
var models = require('./models');

// define the home page route
router.get('/', function(req, res) {
	models.Project.findAll()
		.then(function (allProjects) {
			  res.json(allProjects);
			
		});
});

router.get('/:projectId', function(req, res) {
  res.send('Bio');
}); 

module.exports = router;
