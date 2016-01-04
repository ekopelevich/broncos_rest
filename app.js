var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

var broncosRoute = require("./routes/broncos");

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/broncos", broncosRoute);

app.listen(process.env.PORT, function(){
    console.log("Running on port ", process.env.PORT);
});
