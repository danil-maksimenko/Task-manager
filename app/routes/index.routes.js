const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/board"); // Default route redirects to task board
});

router.post("/logout", (req, res) => {
  console.log("Logout requested");
  process.exit(); // 🛑 Это завершает Node.js сервер
});

module.exports = router;
