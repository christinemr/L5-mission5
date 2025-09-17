const AuctionItem = require("../models/AuctionItem");
const seedData = require("../data/seed.json");

// insert seed
async function seed() {
  try {
    await AuctionItem.insertMany(seedData);
    console.log("🌱 seeded auction data 🌱");
  } catch (error) {
    console.error("⚠️ error seeding", error.message);
  }
}

// delete all data
async function deleteAll() {
  try {
    await AuctionItem.deleteMany({});
  } catch (error) {
    console.error("⚠️ error deleting", error.message);
  }
}

// list data
async function list() {
  try {
    const listItems = await AuctionItem.find({});
    if (listItems.length === 0) {
      console.log("🤔 no item found");
    } else {
      listItems.forEach(
        `${listItems.title} — Start Price: $${listItems.start_price} (Reserve: $${listItems.reserve_price})`
      );
    }
  } catch (error) {
    console.error("⚠️ error listing items", error.message);
  }
}

module.exports = { seed, deleteAll, list };
