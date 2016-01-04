var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var path = require('path');
var port = 3000;

var broncosRoute = require("./routes/broncos");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/broncos", broncosRoute);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('players', { title: 'Broncos Players'});
});

app.listen(port, function(){ //process.env.NODE_ENV,
    console.log("Running on port 3000"); //process.env.NODE_ENV
});
