const express = require('express');
const { createOrder, getOrdersByUserId } = require('../controllers/orderController');
const router = express.Router();

// Créer une commande
router.post('/', createOrder);

// Récupérer les commandes d'un utilisateur
router.get('/:userId', getOrdersByUserId);

module.exports = router;
