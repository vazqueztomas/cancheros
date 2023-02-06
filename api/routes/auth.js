const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/login', authController.handleLogin);
router.post('/signup', authController.handleSignup);
router.get('/refresh', authController.handleRefreshToken);
router.get('/logout', authController.handleLogout);

module.exports = router;