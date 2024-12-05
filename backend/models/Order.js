const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        }
    ],
    totalAmount: { type: Number, required: true },
    address: { type: String, required: true },
    status: { type: String, default: 'Pending' }, // e.g., Pending, Shipped, Delivered
    paymentMethod: { type: String, required: true }, // e.g., Credit Card, PayPal
    paymentStatus: { type: String, default: 'Not Paid' }, // e.g., Paid, Not Paid
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
