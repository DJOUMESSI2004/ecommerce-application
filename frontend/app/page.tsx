// imported components 

import Banner from "./components/Banner"
import AboutUs from './components/AboutUs'
import HomeDisplay from "./components/HomeDisplay"
import Article from "./components/Article"

export default function Page() {
  return <>

    <Banner />
    <AboutUs />
    <HomeDisplay />

    <div className="articles-container">

      <h1>New Arrivals</h1>
      <div className="articles-flex">
        <Article
          imageSrc="/images/shirt1.png"
          name="City of Shirts"
          price="$20.00"
        />

        <Article
          imageSrc="/images/shirt2.png"
          name="Street Smart Hoodie"
          price="$25.00"
        />

        <Article
          imageSrc="/images/shirt1.png"
          name="Urban Sweat Shirt"
          price="$30.00"
        />
      </div>

      <p>Tip: Drag and drop your image over the mockup.</p>

    </div>

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


  </>
}