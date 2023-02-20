const User = require("../models/User");
const teams = require("../data/teams.json");

const handleNewClub = async (req, res) => {
  try {
    const { email, clubName } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(403).json("Acceso denegado.");

    const newClub = await User.updateOne(user, { $set: { club: clubName } });
    res.status(200).json(newClub);
    console.log(newClub);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
};

const getTeams = async (req, res) => {
  try {
    return res.status(200).json(teams);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
};

const deleteMatch = async (req, res) => {
  try {
    const { email, id } = req.body;
    const user = await User.findOne({ email });
    let matches = user.matches;
    let matchToDelete = matches.filter((el) => id !== el._id.toString());
    matches = [...matchToDelete];
    await user.save();
    return res.status(200).json(matches);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
};

module.exports = { handleNewClub, getTeams, deleteMatch };
