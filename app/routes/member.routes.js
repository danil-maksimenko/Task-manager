const express = require("express");
const router = express.Router();
const MemberController = require("../controllers/MemberController");

router.get("/", MemberController.overview);

router.get("/new", MemberController.showForm);
router.get("/:id/edit", MemberController.showForm);

router.post("/save", MemberController.process);

router.post("/:id/delete", MemberController.eliminate);

module.exports = router;
