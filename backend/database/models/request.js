const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
});

const Card = mongoose.model("request", cardSchema);
module.exports = Card;
