const express = require('express');
const { getAllProducts, createProduct, getProductById } = require('../controllers/productController');
const router = express.Router();

// Récupérer tous les produits
router.get('/', getAllProducts);

// Ajouter un nouveau produit
router.post('/', createProduct);

// Récupérer un produit par ID
router.get('/:id', getProductById);

module.exports = router;
