const express = require('express');
const { addToCart, getCartByUserId } = require('../controllers/cartController');
const router = express.Router();

// Ajouter un produit au panier
router.post('/add', addToCart);

// Récupérer le panier d'un utilisateur
router.get('/:userId', getCartByUserId);

module.exports = router;
