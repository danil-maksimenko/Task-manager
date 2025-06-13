const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/MemberController");

// List all members
router.get("/", MemberController.overview);

// Show create/edit form
router.get("/new", MemberController.showForm);
router.get("/:id/edit", MemberController.showForm);

// Handle create/update
router.post("/save", MemberController.process);

// Delete member
router.post("/:id/delete", MemberController.eliminate);

module.exports = router;
