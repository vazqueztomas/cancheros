const User = require("../models/User");

const getUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json("Usuario no encontrado");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

const setNewMatch = async (req, res) => {
  try {
    const { email, playVersus, matchDay } = req.body;

    console.log(email);
    const user = await User.findOne({ email });
    if (!user) return res.json("Usuario no encontrado");
    const match = {
      playVersus,
      matchDay,
    };
    const newMatch = await User.updateOne(user, { $push: { matches: match } });
    res.status(200).json(newMatch);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, setNewMatch };
