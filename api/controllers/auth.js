const User = require("../models/User");
const bcrypt = require("bcrypt");
const { v4: uuid } = require("uuid");
const jwt = require("jsonwebtoken");

const handleSignup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(404).json("Email, nombre y contraseña obligatorios");

  const duplicate = await User.findOne({ email });
  if (duplicate) return res.status(409).json("El registro ya existe.");

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationString = uuid();

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      verificationString,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("No se pudo realizar el registro.");
  }
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json("El email y la contraseña son obligatorios.");

  const foundUser = await User.findOne({ email }).exec();
  if (!foundUser) return res.status(401).json("No se encontró el usuario.");
  const match = await bcrypt.compare(password, foundUser.password);
  if (match) {
    const accessToken = jwt.sign(
      {
        UserInfo: {
          id: foundUser._id,
          name: foundUser.name,
          email: foundUser.email,
        },
      },
      process.env.JWT_ACCESS_TOKEN_SECRET,
      { expiresIn: "240s" }
    );

    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.JWT_REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    foundUser.refreshToken = refreshToken;
    await foundUser.save();

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // Send authorization roles and access token to user
    const { id, name, email } = foundUser;
    res.json({
      userInfo: { id, name, email, accessToken },
    });
  } else {
    return res.status(401).json("No autorizado.");
  }
};

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });

  const foundUser = await User.findOne({ refreshToken }).exec();

  // Detected refresh token reuse!
  if (!foundUser) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, decoded) => {
        if (err) return res.sendStatus(403); //Forbidden
        // Delete refresh tokens of hacked user
        const hackedUser = await User.findOne({
          username: decoded.username,
        }).exec();
        hackedUser.refreshToken = [];
        const result = await hackedUser.save();
      }
    );
    return res.sendStatus(403); //Forbidden
  }

  const newRefreshTokenArray = foundUser.refreshToken.filter(
    (rt) => rt !== refreshToken
  );

  // evaluate jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) {
        // expired refresh token
        foundUser.refreshToken = [...newRefreshTokenArray];
        const result = await foundUser.save();
      }
      if (err || foundUser.username !== decoded.username)
        return res.sendStatus(403);

      // Refresh token was still valid
      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: decoded.username,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10s" }
      );

      const newRefreshToken = jwt.sign(
        { username: foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "15s" }
      );
      // Saving refreshToken with current user
      foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
      const result = await foundUser.save();

      // Creates Secure Cookie with refresh token
      res.cookie("jwt", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 24 * 60 * 60 * 1000,
      });

      res.json({ accessToken });
    }
  );
};

module.exports = { handleSignup, handleLogin, handleRefreshToken };
