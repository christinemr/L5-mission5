// define mongoose models
const mongoose = require("mongoose");

// set auction schema
const auctionSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  start_price: { type: Number },
  reserve_price: { type: Number },
});

// define & export
const auctionItem = mongoose.model("AuctionItem", auctionSchema);
module.exports = auctionItem;
