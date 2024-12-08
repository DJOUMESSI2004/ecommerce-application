"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';  // Import Link component from Next.js
import Article from '../components/Article';
import '../styles/components/product.css';

interface Product {
  id: string;  // Unique identifier for each product
  imageSrc: string;
  name: string;
  price: string;
  link: string;  // Optionally link to the product page
}

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch the product data from the JSON file
    const fetchProducts = async () => {
      const response = await fetch('/data/products.json');  // Adjust the path as necessary
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  

  return (
    <div className="product-container">
      <h1>Products</h1>
      <div className="display-products">
        {products.map((product, index) => (
          <Link key={index} href={`/products/${product.id}`}> {/* Link to the dynamic product page */}
            
              <Article
                imageSrc={product.imageSrc}
                name={product.name}
                price={product.price}
                
              />
            
          </Link>
        ))}
      </div>
    </div>
  );
}
