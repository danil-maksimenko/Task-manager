const { MENU_LINKS } = require("../../constants/navigation");
const MemberService = require("../services/member.service");

module.exports = {
  async overview(req, res) {
    const people = await MemberService.findAll();
    res.render("pages/members", {
      people,
      menuLinks: MENU_LINKS,
      activeLinkPath: req.path,
    });
  },

  async showForm(req, res) {
    const person = req.params.id
      ? await MemberService.findById(req.params.id)
      : null;
    res.render("pages/memberForm", {
      person,
      menuLinks: MENU_LINKS,
      activeLinkPath: req.path,
    });
  },

  async process(req, res) {
    const data = req.body;
    if (data.id) {
      await MemberService.update(data.id, data);
    } else {
      await MemberService.create(data);
    }
    res.redirect("/members");
  },

  async eliminate(req, res) {
    await MemberService.delete(req.params.id);
    res.redirect("/members");
  },
};
