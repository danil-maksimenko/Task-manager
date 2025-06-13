const { MENU_LINKS } = require("../../constants/navigation");
const CycleService = require("../services/cycle.service");

module.exports = {
  async list(req, res) {
    const cycles = await CycleService.findAll();
    res.render("pages/cycles", {
      cycles,
      menuLinks: MENU_LINKS,
      activeLinkPath: req.path,
    });
  },

  async editForm(req, res) {
    const cycle = req.params.id
      ? await CycleService.findById(req.params.id)
      : null;
    res.render("pages/cycleForm", {
      cycle,
      menuLinks: MENU_LINKS,
      activeLinkPath: req.path,
    });
  },

  async save(req, res) {
    const data = req.body;
    if (data.id) {
      await CycleService.update(data.id, data);
    } else {
      await CycleService.create(data);
    }
    res.redirect("/cycles");
  },

  async delete(req, res) {
    await CycleService.delete(req.params.id);
    res.redirect("/cycles");
  },
};
