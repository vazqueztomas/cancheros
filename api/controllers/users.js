const User = require('../models/User');

const getUser = async (req,res) => {
  try {
    const {email} = req.body;
    const user = await User.findOne({email});
    if (!user) return res.json('Usuario no encontrado');
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {getUser};