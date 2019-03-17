// ********************************************************************************
// Server.js
var express = require("express");

// Set up Express App
// ================================================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
// ================================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// ================================================================================
app.use(express.static("public"));

// Routes
// ================================================================================


// Starting Express app
// ================================================================================
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});

// ********************************************************************************