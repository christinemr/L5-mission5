// insert commands here
const AuctionItem = require("../models/AuctionItem");
const seedData = require("../data/seed.json");

async function seed() {
  try {
    await AuctionItem.insertMany;
  } catch (error) {}
}
