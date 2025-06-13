const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB_URI = process.env.DB_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URI);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
}

module.exports = connectToDatabase;
