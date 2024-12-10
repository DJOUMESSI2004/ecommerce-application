const express = require('express');

const {CreateSession, GetCheckoutSesion} = require('../controllers/CheckoutController');

const router = express.Router();


// create session 
router.post("/create-checkout-session", CreateSession);
router.post("/get-checkout-session", GetCheckoutSesion);

module.exports = router;