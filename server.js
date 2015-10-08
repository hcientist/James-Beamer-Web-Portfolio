'use strict';
var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(express.static(__dirname));
app.use('*', express.static(__dirname + '/index.html'));
var PORT = 80;
http.listen(PORT, function() {
  console.log('listening on *:', PORT);
});