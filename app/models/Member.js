// app/models/Member.js
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  displayName: { type: String, required: true },
  position: { type: String, required: true },
});

module.exports = mongoose.model("Member", memberSchema);
