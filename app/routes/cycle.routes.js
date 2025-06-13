const express = require("express");
const router = express.Router();
const CycleController = require("../controllers/CycleController");

router.get("/", CycleController.list);

router.get("/new", CycleController.editForm);
router.get("/:id/edit", CycleController.editForm);

router.post("/save", CycleController.save);

router.post("/:id/delete", CycleController.delete);

module.exports = router;
