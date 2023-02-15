const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

router.post("/getUser", userController.getUser);
router.post("/setNewMatch", userController.setNewMatch);

module.exports = router;
