// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// create express server
var app = express();

//  set port, bitches
var PORT = process.env.PORT || 3000;

// data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// create routes 
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// we need a listner for it to work, duh



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});