import React from 'react';
import Image from 'next/image';
import '../../styles/components/product.css';

export default function ProductPage() {
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
        {/* <div className="eco-label">
          <Image
            src="/images/shirt1.png" // Replace with eco-label path
            alt="Eco Label"
            width={50}
            height={50}
          />
        </div> */}
      </div>

      {/* Right Section - Product Details */}
      <div className="product-details">
        <h1 className="product-title">T-shirt en coton pour homme</h1>
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
          <span>31.99 €</span>
          <small>TVA incluse</small>
        </div>

        <div className="product-offer">
          Achetez trois produits de la même couleur, du même modèle et de la même taille pour économiser 10 %.
        </div>

        <div className="add-to-cart">
          <div className="quantity-selector">
            <button>-</button>
            <span>1 pcs</span>
            <button>+</button>
          </div>
          <button className="cart-button">Ajouter au panier</button>
          <button className="wishlist-button">❤</button>
        </div>

      </div>
    </div>
  );
}
