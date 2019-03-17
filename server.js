// ********************************************************************************
// Server.js
var app = require("express");

// Set up Express App
// ================================================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Set up Express app to handle data parsing
// ================================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starting Express app
// ================================================================================
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});

// ********************************************************************************