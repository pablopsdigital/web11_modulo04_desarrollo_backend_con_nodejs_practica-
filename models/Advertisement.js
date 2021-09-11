"use strict";

//Import mongoose module
const mongoose = require("mongoose");

//Definition the schema of advertisement
const advertisementSchema = mongoose.Schema({
  name: { type: String, maxLength: 100, required: true, index: true },
  sale: { type: Boolean, required: true, index: true },
  price: { type: Number, required: true },
  photo: {
    type: String,
    maxLength: 500,
    default: "no-picture.png",
  },
  tags: [String],
  creaatedAt: { type: Date, default: Date.now },
});

// Create the model
const Advertisement = mongoose.model("Advertisement", advertisementSchema);

// Export model
module.exports = Advertisement;
