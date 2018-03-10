// console.log('Hello.Cao zdravo.')

var express = require('express');
var consolidate = require('consolidate');
var prc = require('./params.js');

var app = express();

app.get('/test', function(request, response));


app.listen(8080, function() {
  console.log('server');
});
