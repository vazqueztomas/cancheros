const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

router.post('/login', authController.handleLogin);
router.post('/signup', authController.handleSignup);

module.exports = router;