const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/board");
});

router.post("/logout", (req, res) => {
  console.log("Logout requested");
  process.exit();
});

module.exports = router;
