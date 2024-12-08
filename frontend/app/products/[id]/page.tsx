"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import '../../styles/components/product.css';

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  // Example Product Details (replace with dynamic data if needed)
  const product = {
    id: "shirt1",  // Unique ID for the product
    name: "T-shirt en coton pour homme",
    price: 31.99,  // Example price
  };

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: count,  // Pass the quantity selected by the user
    };
    
    addToCart(cartItem); // Pass the complete cart item to the cart context
    setCount(1);  // Reset count after adding to cart
  };

  return (
    <div className="product-page">
      {/* Left Section - Product Image */}
      <div className="product-image">
        <Image
          src="/images/shirt1.png" // Replace with the actual image path
          alt="T-shirt en coton pour homme"
          width={400}
          height={500}
          priority
        />
      </div>

      {/* Right Section - Product Details */}
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">
          100 % coton biologique, cueilli à la main, cultivé sans pesticides ni insecticides.
        </p>

        <div className="product-colors">
          <h4>Couleur:</h4>
          <div className="color-options">
            <span className="color white"></span>
            <span className="color navy"></span>
            <span className="color green"></span>
            <span className="color black"></span>
          </div>
        </div>

        <div className="product-size">
          <h4>Choisir la taille:</h4>
          <div className="size-options">
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
          </div>
        </div>

        <div className="product-price">
          <span>{product.price} €</span>
          <small>TVA incluse</small>
        </div>

        <div className="product-offer">
          Achetez trois produits de la même couleur, du même modèle et de la même taille pour économiser 10 %.
        </div>

        <div className="add-to-cart">
          <div className="quantity-selector">
            <button onClick={decrease}>-</button>
            <span>{count}</span>
            <button onClick={increase}>+</button>
          </div>
          <button onClick={handleAddToCart} className="cart-button">
            Ajouter au panier
          </button>
          <button className="wishlist-button">❤</button>
        </div>
      </div>
    </div>
  );
}
