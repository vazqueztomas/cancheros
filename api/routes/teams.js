const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teams");

router.post("/handleNewClub", teamsController.handleNewClub);
router.get("/getTeams", teamsController.getTeams);
router.post("/deleteMatch", teamsController.deleteMatch);

module.exports = router;
