// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// create express server
var app = express();

//  set port, bitches
var PORT = process.env.PORT || 8080;

// data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// create routes 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// I heard you need a listner

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});