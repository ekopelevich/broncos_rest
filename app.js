var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var port = 3000;

var broncosRoute = require("./routes/broncos");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/broncos", broncosRoute);

app.listen(port, function(){
    console.log("Running on port ", port);
});
