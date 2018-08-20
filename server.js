//require our depenencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//create our server
var app = express();

var PORT = process.env.PORT || 8080;

//create body parser so we can make data easy to read and in json format
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);
require("./app/routing/apiroutes")(app);




//console log the server and port number you are connected to
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  
