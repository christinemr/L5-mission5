#!/usr/bin/env node
require("dotenv").config();
const mongoose = require("mongoose");
const { Command } = require("commander");
const program = new Command();
const { seed, deleteOne, deleteAll, list } = require("./commands");

// connect to db
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);

  // seed command
  program
    .command("seed")
    .description("Seed auction data")
    .action(async () => {
      await seed();
      mongoose.disconnect();
    });

  // delete all command
  program
    .command("delete")
    .description("delete all auction data")
    .action(async () => {
      await deleteAll();
      mongoose.disconnect();
    });

  // list command
  program
    .command("list")
    .description("List all auction items")
    .action(async () => {
      await list();
      mongoose.disconnect();
    });

  program.parse(process.argv);
}
// execute main
main();
