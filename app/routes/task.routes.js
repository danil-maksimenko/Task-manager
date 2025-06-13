const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/BoardController");

router.get("/", BoardController.index);

router.get("/new", BoardController.form);
router.get("/:id/edit", BoardController.form);

router.post("/save", BoardController.store);

router.post("/:id/delete", BoardController.remove);

module.exports = router;
