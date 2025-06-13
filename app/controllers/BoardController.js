const { MENU_LINKS } = require("../../constants/navigation");
const BoardService = require("../services/board.service");
const CycleService = require("../services/cycle.service");
const MemberService = require("../services/member.service");

module.exports = {
  async index(req, res) {
    try {
      const items = await BoardService.findAll();
      const cycles = await CycleService.findAll();
      const members = await MemberService.findAll();
      res.render("pages/board", {
        items,
        cycles,
        members,
        menuLinks: MENU_LINKS,
        activeLinkPath: req.path,
      });
    } catch (err) {
      console.error("❌ Error loading board:", err.message);
      res.status(500).render("pages/500", {
        title: "Board Error",
        message: "Failed to load board data.",
      });
    }
  },

  async form(req, res) {
    const item = req.params.id
      ? await BoardService.findById(req.params.id)
      : null;
    const cycles = await CycleService.findAll();
    const members = await MemberService.findAll();
    res.render("pages/boardForm", {
      item,
      cycles,
      members,
      menuLinks: MENU_LINKS,
      activeLinkPath: req.path,
    });
  },

  async store(req, res) {
    const data = req.body;
    if (data.id) {
      await BoardService.update(data.id, data);
    } else {
      await BoardService.create(data);
    }
    res.redirect("/board");
  },

  async remove(req, res) {
    await BoardService.delete(req.params.id);
    res.redirect("/board");
  },
};
