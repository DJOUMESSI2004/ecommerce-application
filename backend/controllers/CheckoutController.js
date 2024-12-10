
const Order = require('../models/Order');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const YOUR_DOMAIN = "http://localhost:3000"; // Frontend URL


const CreateSession = async (req, res) => {
    const { items, shipping } = req.body;
  
    // Validate incoming data
    if (
      !shipping?.name ||
      !shipping?.email ||
      !shipping?.address ||
      !shipping?.city ||
      !shipping?.postalCode
    ) {
      return res.status(400).json({ error: "Missing shipping information." });
    }
  
    try {
      // Map items to Stripe line items
      const lineItems = items.map((item) => ({
        price_data: {
          currency: "eur", // Adjust currency as needed
          product_data: {
            name: item.name,
            images: [item.image], // Optional: Provide product image URL
          },
          unit_amount: Math.round(item.price * 100), // Convert price to cents
        },
        quantity: item.quantity,
      }));
  
      // Create Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"], // Only allow card payments
        line_items: lineItems,
        mode: "payment", // Single payment
        success_url: `${YOUR_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}`, // Redirect after successful payment
        cancel_url: `${YOUR_DOMAIN}/cancel`, // Redirect after cancellation
        customer_email: shipping.email, // Customer's email for Stripe receipt
        metadata: {
          name: shipping.name,
          address: shipping.address,
          city: shipping.city,
          postalCode: shipping.postalCode,
        },
      });
  
      // Store order details in the database
      const newOrder = new Order({
        items,
        shipping,
        stripeSessionId: session.id,
        paymentStatus: 'pending', // Default status
      });
  
      await newOrder.save();
  
      // Return the session URL to the frontend
      res.status(200).json({ id: session.id });
    } catch (error) {
      console.error("Error creating checkout session:", error);
      res.status(500).json({ error: "Failed to create checkout session." });
    }
  };





  const GetCheckoutSesion = async (req, res) => {
    const { sessionId } = req.body;
  
    if (!sessionId) {
      return res.status(400).json({ error: "Session ID is required." });
    }
  
    try {
      // Retrieve the session details from Stripe
      const session = await stripe.checkout.sessions.retrieve(sessionId);
  
      // Update payment status in the database
      const order = await Order.findOne({ stripeSessionId: sessionId });
      if (order) {
        order.paymentStatus = session.payment_status; // Update status ('paid', 'unpaid', etc.)
        await order.save();
      }
  
      // Send the session details back to the frontend
      res.status(200).json(session);
    } catch (error) {
      console.error("Error retrieving checkout session:", error);
      res.status(500).json({ error: "Failed to retrieve checkout session." });
    }
  };
  

module.exports = { CreateSession, GetCheckoutSesion };