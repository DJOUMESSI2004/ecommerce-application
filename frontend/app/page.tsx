"use client"

// imported components 

import Banner from "./components/Banner"
import AboutUs from './components/AboutUs'
import HomeDisplay from "./components/HomeDisplay"
import Article from "./components/Article"
import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollAnimation from "./components/ScrollAnimation"



interface Product {
  id: string;
  imageSrc: string;
  name: string;
  price: string;
}

export default function Page() {

  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    // fetch product from the json file 
    const fetchProducts = async () => {
      const response = await fetch('/data/products.json');
      const data = await response.json();
      setProducts(data.slice(0, 3));
    };

    fetchProducts();
  }, []);


  return <>

    <Banner />
    <ScrollAnimation>
      <AboutUs />
    </ScrollAnimation>
    <ScrollAnimation>
      <HomeDisplay />
    </ScrollAnimation>

    {/* Articles Section */}

    <div className="articles-container">

      <h1>New Arrivals</h1>
      <ScrollAnimation>
        <div className="articles-flex">

          {products.map((product, index) => (
            <Link key={index} href={`/products/${product.id}`}>
              <Article
                imageSrc={product.imageSrc}
                name={product.name}
                price={product.price}
              />
            </Link>
          ))}


        </div>
      </ScrollAnimation>


      <p>Tip: Drag and drop your image over the mockup.</p>

    </div>
    <ScrollAnimation >
      <section className="boost-section">

        <div className="left-section">
          <h1>Press</h1>
        </div>
        <div className="right-section">
          <div className="bosters">
            <p>"Boost your credibility by adding quotes from articles written about your brand."</p>
            <h2>Youth Culture Magazine</h2>
          </div>
          <div className="bosters">
            <p>"Boost your credibility by adding quotes from articles written about your brand."</p>
            <h2>Streetwear Daily</h2>
          </div>
          <div className="bosters">
            <p>"Boost your credibility by adding quotes from articles written about your brand."</p>
            <h2>Idea Media</h2>
          </div>
        </div>

      </section>

    </ScrollAnimation>


  </>
}