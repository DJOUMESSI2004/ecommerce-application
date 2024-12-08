"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import "../../styles/components/product.css";
import { useParams } from "next/navigation";

interface Product {
  id: string;
  imageSrc: string;
  name: string;
  price: string;
}

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const params = useParams(); // Use useParams to get dynamic route params
  const id = params?.id; // Get the 'id' from the URL
  const [product, setProduct] = useState<Product | null>(null);
  
  // debugging
  console.log('this is the id url', id);

  useEffect(() => {

    const fetchProduct = async () => {
      if (id) {
        
        const response = await fetch("/data/products.json"); // Fetch product data from JSON file
        const data = await response.json();
        const foundProduct = data.find((item: Product) => item.id === id);
        setProduct(foundProduct || null);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading.....</div>; // Display loading message
  }

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
      quantity: count, // Pass the selected quantity
    };

    // addToCart(cartItem); // Add to cart context
    setCount(1); // Reset quantity after adding to the cart
  };



  return (
    <div className="product-page">
      {/* Left Section - Product Image */}
      <div className="product-image">
        <Image
          src={product.imageSrc} // Dynamic image source
          alt={product.name}
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
