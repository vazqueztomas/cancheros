const User = require('../models/User');
const bcrypt = require('bcrypt');
const {v4: uuid} = require('uuid');

const handleSignup = async(req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(404).json('Email, nombre y contraseña obligatorios');

  const duplicate = await User.findOne({ email });
	if (duplicate) return res.status(409).json('El registro ya existe.');

  try {
		const hashedPassword = await bcrypt.hash(password, 10);
		const verificationString = uuid();

		const newUser = await User.create({ name, email, password: hashedPassword, verificationString });
		res.status(201).json(newUser);
	} catch (error) {
		console.error(error.message);
		res.status(500).json('No se pudo realizar el registro.');
	}
};

const handleLogin = async (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) return res.status(404).json('Email y contraseña obligatorios');

	const foundUser = await User.findOne({ email }).exec();
	if (!foundUser) return res.status(401).json('No se encontró el usuario.')

  const match = await bcrypt.compare(password, foundUser.password);
	if (match) {
		const accessToken = jwt.sign(
			{
				"UserInfo": {
					"id": foundUser._id,
					"name": foundUser.name,
					"email": foundUser.email,
				}
			},
			process.env.JWT_ACCESS_TOKEN_SECRET,
			{ expiresIn: '240s' }
		);

		const refreshToken = jwt.sign(
			{ "username": foundUser.username },
			process.env.JWT_REFRESH_TOKEN_SECRET,
			{ expiresIn: '1d' }
		);

		foundUser.refreshToken = refreshToken;
		await foundUser.save();

		res.cookie('jwt', refreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

		// Send authorization roles and access token to user
		const { id, name, email } = foundUser;
		res.json({ userInfo: { id, name, email, accessToken }});

	} else {
		return res.status(401).json('No autorizado.')
	}
}

module.exports = {handleSignup, handleLogin}