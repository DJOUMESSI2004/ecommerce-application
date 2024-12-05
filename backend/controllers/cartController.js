const Cart = require('../models/Cart');

// Ajouter un produit au panier
const addToCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.body.userId });
        if (!cart) {
            const newCart = new Cart({ userId: req.body.userId, items: [req.body.item] });
            const savedCart = await newCart.save();
            return res.status(201).json(savedCart);
        }
        cart.items.push(req.body.item);
        const updatedCart = await cart.save();
        res.status(200).json(updatedCart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupérer le panier d'un utilisateur
const getCartByUserId = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { addToCart, getCartByUserId };
