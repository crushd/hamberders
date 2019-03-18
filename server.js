// ********************************************************************************
// Server.js
var express = require("express");
var exphbs = require("express-handlebars");

// Set up Express App
// ================================================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up Express app to handle data parsing
// ================================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// Static directory
// ================================================================================
app.use(express.static("public"));

// Starting Express app
// ================================================================================
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});

// ********************************************************************************