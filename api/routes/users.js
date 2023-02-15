const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.get("/getUser", userController.getUser);
router.post("/setNewMatch", userController.setNewMatch);

module.exports = router;
