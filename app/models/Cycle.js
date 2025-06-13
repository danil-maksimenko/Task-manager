const mongoose = require("mongoose");

const cycleSchema = new mongoose.Schema({
  label: { type: String, required: true },
  begins: { type: Date, required: true },
  ends: { type: Date, required: true },
});

module.exports = mongoose.model("Cycle", cycleSchema);
