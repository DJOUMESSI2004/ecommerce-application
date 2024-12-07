
import Article from '../components/Article';
import '../styles/components/product.css';

export default function ProductPage() {
    return (
        <div className="product-container">
            <h1>products</h1>
            <div className="display-products">

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
        </div>
    );
}
