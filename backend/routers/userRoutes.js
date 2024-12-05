const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// Inscription
router.post('/register', registerUser);

// Connexion
router.post('/login', loginUser);

module.exports = router;
