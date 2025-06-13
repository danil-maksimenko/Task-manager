const BoardItem = require("../models/BoardItem");

module.exports = {
  findAll: async () =>
    await BoardItem.find().populate("assignedTo").populate("relatedCycle"),

  findById: async (id) => await BoardItem.findById(id),

  create: async (data) => await BoardItem.create(data),

  update: async (id, data) => await BoardItem.findByIdAndUpdate(id, data),

  delete: async (id) => await BoardItem.findByIdAndDelete(id),
};
