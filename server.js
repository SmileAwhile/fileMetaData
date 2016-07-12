var express = require('express');
var multer = require('multer'),
bodyParser = require('body-parser'),
path = require('path');
var app = new express();
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){ res.render('index'); });  // show jade file for uploading

app.post('/', multer({ dest: './uploads/'}).single('upl'),  // post to /uploads
function(req,res){ console.log(req.body); //form fields

res.end(JSON.stringify({ size: req.file.size })); // display file size 

res.status(204).end(); });

var port = 3000;
app.listen( port, function(){
  console.log('listening on port '+port);
} );
