const express = require('express');
const { processPayment } = require('../controllers/paymentController');
const router = express.Router();

// Effectuer un paiement
router.post('/process', processPayment);

module.exports = router;
