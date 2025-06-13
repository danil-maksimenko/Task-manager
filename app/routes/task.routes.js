const express = require("express");
const router = express.Router();
const BoardController = require("../controllers/BoardController");

// List all tasks
router.get("/", BoardController.index);

// Show create/edit form
router.get("/new", BoardController.form);
router.get("/:id/edit", BoardController.form);

// Handle create/update
router.post("/save", BoardController.store);

// Delete task
router.post("/:id/delete", BoardController.remove);

module.exports = router;
