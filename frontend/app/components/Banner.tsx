import Image from 'next/image'; // Import images from public
import Link from 'next/link';

import '../styles/components/banner.css';

export default function Banner() {
    return (
        <div className="banner">

            <div className="top-flex-align">

                <h1>Find</h1>
                <div className="banner-img">
                    <Image
                        src="/images/t-shirt.png"
                        alt="Logo MyShop"
                        width={100}
                        height={50}
                        priority
                    />
                </div>

            </div>

            <div className="middle-center-align">
                <h1>your</h1>
            </div>

            <div className="buttom-flex-align">
                <div className="left-text">
                    Check out our Captivating Cities shirt collection
                </div>
                <h1>vibe</h1>
                <div className="round-btn">
                    <Link href="/products">
                        <button>
                            explore more
                        </button>
                    </Link>
                </div>

            </div>

        </div>
    );
}
