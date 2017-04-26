// set up ========================
var express = require('express');
var app = express();

//setting view Engine
app.set('view engine', 'pug')
//wetting public folder
app.use(express.static(__dirname + '/public'));
//load route
var route = require('./route/route');

//Constants
var PORT = 8080;

app.use('/',route);

app.listen(PORT);

console.log('Running on http://localhost:' + PORT);