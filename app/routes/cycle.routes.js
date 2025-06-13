const express = require("express");
const router = express.Router();
const CycleController = require("../controllers/CycleController");

// List all cycles
router.get("/", CycleController.list);

// Show create/edit form
router.get("/new", CycleController.editForm);
router.get("/:id/edit", CycleController.editForm);

// Handle create/update
router.post("/save", CycleController.save);

// Delete cycle
router.post("/:id/delete", CycleController.delete);

module.exports = router;
