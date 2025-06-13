const Member = require("../models/Member");

module.exports = {
  findAll: async () => await Member.find(),

  findById: async (id) => await Member.findById(id),

  create: async (data) => await Member.create(data),

  update: async (id, data) => await Member.findByIdAndUpdate(id, data),

  delete: async (id) => await Member.findByIdAndDelete(id),
};
