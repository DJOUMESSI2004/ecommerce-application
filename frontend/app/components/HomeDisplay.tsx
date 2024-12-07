
// css import 
import '../styles/components/homeDisplay.css';

// image importation 
import Image from "next/image";


// building the export HomeDisplay function
export default function HomeDisplay() {
    return <div className='homeDisplay'>

        <div className="top-h-display">
            <h2>We’re <br /> proud of <br /> our clothes</h2>
        </div>

        <div className="buttom-h-display">

            <div className="web-icon">
                <div className="content-wrap">
                    <Image
                        src="/images/first.png"
                        alt="Logo MyShop"
                        width={50}
                        height={50}
                        priority
                    />
                    <span>
                        Designed <br /> by locals
                    </span>
                </div>

            </div>

            <div className="web-icon">
                <div className="content-wrap">
                    <Image
                        src="/images/second.png"
                        alt="Logo MyShop"
                        width={50}
                        height={50}
                        priority
                    />
                    <span>
                        Inclusive <br />sizes
                    </span>
                </div>

            </div>

            <div className="web-icon">
                <div className="content-wrap">
                    <Image
                        src="/images/third.png"
                        alt="Logo MyShop"
                        width={50}
                        height={50}
                        priority
                    />
                    <span>
                        Eco-friendly <br />packaging
                    </span>
                </div>
            </div>
        </div>

    </div>
}