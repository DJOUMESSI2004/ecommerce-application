const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);  // This loads the secret key from the environment

// Example function to handle a payment
const processPayment = async (req, res) => {
  const { amount, token } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,  // Amount in cents
      currency: 'usd', // Adjust currency as needed
      payment_method: token.id,
      confirm: true,
    });

    res.status(200).json({
      success: true,
      message: 'Payment successful',
      paymentIntent,
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: 'Payment failed',
      error: error.message,
    });
  }
};

module.exports = { processPayment };
