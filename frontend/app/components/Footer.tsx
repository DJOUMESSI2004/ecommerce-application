import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Import icons

import '../styles/components/footer.css';


export default function Footer() {

    return <div className="footer">

        <div className="footer-top">
            <h2>Reach out for inquiries</h2>
        </div>

        <div className="footer-middle">
            <ul>
                <li>
                    <label>Phone</label>
                    <span>(123) 456-7890</span>
                </li>
                <li>
                    <label>email</label>
                    <span>hello@reallygreatsite.com</span>
                </li>
                <li>
                    <label>social</label>
                    <div className="social-icons">
                        <FaFacebookF />
                        <FaInstagram />
                    </div>
                </li>
            </ul>
        </div>

        <div className="footer-bottom">
            <h2>and partnerships</h2>
        </div>

    </div>
}