const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const routes = require('./routes');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require('passport');  
const LocalStrategy = require('passport-local').Strategy;  

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// api routes
app.use(routes);

// default
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/swapDB');

// server
app.listen(PORT, () => {
  console.log(`🌎  ==> Server now on port ${PORT}!`);
});
