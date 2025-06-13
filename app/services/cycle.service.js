// app/services/cycle.service.js
const Cycle = require("../models/Cycle");

module.exports = {
  findAll: async () => await Cycle.find(),

  findById: async (id) => await Cycle.findById(id),

  create: async (data) => await Cycle.create(data),

  update: async (id, data) => await Cycle.findByIdAndUpdate(id, data),

  delete: async (id) => await Cycle.findByIdAndDelete(id),
};
