const { LOGOUT_LINKS } = require("../../constants/navigation");

exports.getLogoutView = (req, res) => {
  res.render("pages/logout", {
    headTitle: "Board App - Logout",
    path: "/logout",
    activeLinkPath: "/logout",
    menuLinks: LOGOUT_LINKS,
  });
};

exports.killApplication = (req, res) => {
  console.log("⚠️  Application is shutting down via /kill");
  process.exit();
};
