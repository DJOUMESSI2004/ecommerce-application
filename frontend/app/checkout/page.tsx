"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext"; // Your custom hook/context for cart state
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Link from "next/link";
import "../styles/components/checkout.css";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const [loading, setLoading] = useState(false); // Track loading state
  const [error, setError] = useState(""); // Track any error messages

  // Handle shipping info input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  // Validate shipping information
  const validateShippingInfo = () => {
    const { name, email, address, city, postalCode } = shippingInfo;
    return name && email && address && city && postalCode;
  };

  // Handle checkout process
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Check if all fields are filled out
    if (!validateShippingInfo()) {
      setError("Please fill out all shipping details.");
      return;
    }

    try {
      setLoading(true); // Set loading to true during the checkout process
      setError(""); // Clear any previous error

      // Create checkout session on the server
      const { data: session } = await axios.post("http://localhost:5000/api/checkout/create-checkout-session", {
        items: cartItems, // Pass cart items
        shipping: shippingInfo, // Pass shipping details
      });

      // Ensure the session ID is available
      if (session?.id) {
        // Redirect the user to Stripe Checkout
        const result = await stripe?.redirectToCheckout({ sessionId: session.id });

        if (result?.error) {
          // Handle the error if it exists
          setError(result.error.message || "Something went wrong during checkout.");
        }
      } else {
        setError("Failed to create a checkout session. Please try again.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false); // Reset loading state after the process
    }
  };

  // Calculate the total price from the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="checkoutPage">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/products">Start shopping</Link>
        </p>
      ) : (
        <div className="checkoutContent">
          {/* Cart Summary */}
          <div className="cartSummary">
            <h2>Your Order</h2>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.quantity} x €{item.price.toFixed(2)}
                </li>
              ))}
            </ul>
            <h3>Total: €{totalPrice.toFixed(2)}</h3>
          </div>

          {/* Shipping Form */}
          <div className="shippingForm">
            <h2>Shipping Details</h2>
            <form>
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={shippingInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={shippingInfo.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={shippingInfo.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={shippingInfo.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="postalCode">Postal Code</label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  value={shippingInfo.postalCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </form>
          </div>

          {/* Payment Button */}
          {error && <div className="errorMessage">{error}</div>} {/* Show error message */}
          <button className="checkoutButton" onClick={handleCheckout} disabled={loading}>
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      )}
    </div>
  );
}
