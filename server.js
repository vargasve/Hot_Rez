// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// create express server
var app = express();

// set port, bitches
var PORT = process.env.PORT || 3000;

// data parsing 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
  {
    name: "kevin",
    number: 4697772814,
    email: "kevin@gmail.com",
    id: 34
  }
];

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

// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newcharacter.name = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// we need a listner for it to work, duh
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});