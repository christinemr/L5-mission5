require("dotenv").config();
const mongoose = require("mongoose");

// connect to db
mongoose.connect(process.env.MONGODB_URI);
