'use strict';
var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname));
var PORT = 80;
http.listen(PORT, function() {
  console.log('listening on *:', PORT);
});

// Self Dependencies
var models = require('./models');
models.start();



var proj = require('./projects-routes');

app.use('/projects', proj);
app.use('*', express.static(__dirname + '/index.html'));

 