// app/models/BoardItem.js
const mongoose = require("mongoose");

const boardItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  note: { type: String },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "Member" },
  stage: {
    type: String,
    enum: ["Pending", "Ongoing", "Completed"],
    default: "Pending",
  },
  relatedCycle: { type: mongoose.Schema.Types.ObjectId, ref: "Cycle" },
});

module.exports = mongoose.model("BoardItem", boardItemSchema);
