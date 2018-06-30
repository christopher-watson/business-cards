const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  Code: { 
    type: String, 
  }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;