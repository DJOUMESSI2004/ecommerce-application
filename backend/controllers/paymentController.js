const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const processPayment = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'usd',
            payment_method: req.body.paymentMethodId,
            confirm: true,
        });
        res.status(200).json(paymentIntent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { processPayment };
