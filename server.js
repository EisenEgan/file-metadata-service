var express = require('express');
var multer = require('multer'),
	bodyParser = require('body-parser'),
	path = require('path');

var app = new express();
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/', multer({ dest: './uploads/'}).single('upl'), function(req,res){
	res.json({size: req.file.size});
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})