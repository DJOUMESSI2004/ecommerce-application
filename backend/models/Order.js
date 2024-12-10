const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    items: [
      {
        name: { type: String, required: true }, // Name of the product
        image: { type: String }, // Optional: URL of the product image
        price: { type: Number, required: true }, // Price in cents
        quantity: { type: Number, required: true }, // Quantity of the item
      },
    ],
    shipping: {
      name: { type: String, required: true }, // Shipping name
      email: { type: String, required: true }, // Shipping email
      address: { type: String, required: true }, // Shipping address
      city: { type: String, required: true }, // City
      postalCode: { type: String, required: true }, // Postal code
    },
    stripeSessionId: { type: String, required: true }, // Stripe session ID
    paymentStatus: { type: String, default: 'pending' }, // Payment status ('pending', 'paid', 'failed')
    createdAt: { type: Date, default: Date.now }, // Timestamp for order creation
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields automatically
  }
);

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
