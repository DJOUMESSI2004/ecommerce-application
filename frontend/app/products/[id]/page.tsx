"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import { useParams } from "next/navigation";
import "../../styles/components/product.css";
import ScrollAnimation from "@/app/components/ScrollAnimation";

interface Product {
  id: string;
  imageSrc: string;
  name: string;
  price: string;
}

export default function ProductPage() {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart(); // Access cart context
  const params = useParams(); // Get dynamic route params
  const id = params?.id; // Get the product ID from the URL
  const [product, setProduct] = useState<Product | null>(null);

  // Fetch the product based on the ID
  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        try {
          const response = await fetch("/data/products.json"); // Fetch data from JSON
          if (!response.ok) throw new Error("Failed to fetch product data");
          const data: Product[] = await response.json();
          const foundProduct = data.find((item) => item.id === id);
          setProduct(foundProduct || null); // Set product or null if not found
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      }
    };

    fetchProduct();
  }, [id]);

  // Handle the loading or error state
  if (!product) {
    return (
      <div>
        {id ? "Loading product details..." : "Product not found."}
      </div>
    );
  }

  // Handle increase and decrease of quantity
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  // Add product to cart
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price), // Ensure price is a number
      quantity: count, // Quantity selected by the user
    };

    addToCart(cartItem); // Add to cart context
    setCount(1); // Reset count after adding to cart
  };

  return (
    <ScrollAnimation>
      <div className="product-page">
        {/* Left Section - Product Image */}
        <div className="product-image">
          <Image
            src={product.imageSrc} // Dynamic product image
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
            100 % coton biologique, cueilli à la main, cultivé sans pesticides ni
            insecticides.
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
            Achetez trois produits de la même couleur, du même modèle et de la
            même taille pour économiser 10 %.
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
    </ScrollAnimation>
  );
}
