import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
// import styles from '../styles/cart.module.css'; // Example CSS module

export default function CartIcon() {
    const { cartItems } = useCart();

    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div >
            <Link href="/cart">
                <FaShoppingCart size={24} />
                <span >{totalItems}</span>
            </Link>
        </div>
    );
}


