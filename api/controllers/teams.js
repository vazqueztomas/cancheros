const User = require('../models/User');

const handleTeam = async (req, res) => {
  try {
    const {email, clubName} = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(403).json('Acceso denegado.');

    const newClub = await User.updateOne(user, {$push: {club: clubName}})
    res.status(200).json(newClub);
  } catch (error) {
    console.error(error);
    return res.json(error);
  }
}

module.exports = handleTeam;