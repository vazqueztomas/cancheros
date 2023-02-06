const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const logoutController = require('../controllers/logout')

router.post('/login', authController.handleLogin);
router.post('/signup', authController.handleSignup);
router.get('/refresh', authController.handleRefreshToken);
router.post('/logout', logoutController.handleLogout);

module.exports = router;