"use client";

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import "../styles/components/cart.css";

interface Product {
  id: string;
  imageSrc: string;
  name: string;
  price: number;
}

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) throw new Error("Failed to load product data");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Map cart items to product details
  const cartWithDetails = cartItems.map((cartItem) => {
    const product = products.find((p) => p.id === cartItem.id);
    return {
      ...cartItem,
      ...product, // Merge product details
    };
  });

  const handleQuantityChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(event.target.value, 10);
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  const totalPrice = cartWithDetails.reduce(
    (acc, item) => acc + (item.price || 0) * item.quantity,
    0
  );

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div className="cartPage">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link href="/products">Start shopping</Link>
        </p>
      ) : (
        <div className="cartItems">
          {cartWithDetails.map((item) =>
            item.name ? (
              <div key={item.id} className="cartItem">
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="productImage"
                />
                <div className="productDetails">
                  <h2>{item.name}</h2>
                  <p>${item.price.toFixed(2)}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e)}
                    min="1"
                    className="quantityInput"
                  />
                </div>
                <div className="actions">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="removeButton"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <div key={item.id} className="cartItem">
                <p>Product not found (ID: {item.id})</p>
              </div>
            )
          )}
          <div className="cartSummary">
            <p>Total: ${totalPrice.toFixed(2)}</p>
            <Link href="/checkout">
              <button className="checkoutButton">Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
