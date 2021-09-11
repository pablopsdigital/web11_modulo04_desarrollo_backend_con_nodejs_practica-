"use strict";

const mongoose = require("mongoose");

mongoose.connection.on("error", (err) => {
  console.log("Connection error", err);
  process.exit(1);
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB to the DB:", mongoose.connection.name);
});

// Create connection
mongoose.connect("mongodb://localhost/nodepop", {});

module.exports = mongoose.connection;
