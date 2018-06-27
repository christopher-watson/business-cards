const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;