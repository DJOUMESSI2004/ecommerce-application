// Importing CSS and Next.js Image
import '../styles/components/article.css';
import Image from 'next/image';


// Define Props Interface for the Article component
interface ArticleProps {
    imageSrc: string;
    name: string;
    price: string;
}

// Reusable Component
export default function Article({ imageSrc, name, price }: ArticleProps) {
    return (
        <div className="article">
            <div className="article-content">

                {/* Dynamic Image */}
                <div className="article-img">
                    <Image
                        src={imageSrc}
                        alt={`Image of ${name}`}
                        width={80}
                        height={100}
                        priority
                    />
                </div>

                {/* Dynamic Info */}
                <div className="article-info">
                    <div className="art-name">{name}</div>
                    <div className="art-price">{price}</div>
                </div>

            </div>
        </div>
    );
}
