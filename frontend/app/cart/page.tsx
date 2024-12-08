"use client"
import { useCart } from '../context/CartContext';
import Link from 'next/link';

import '../styles/components/cart.css'


export default function CartPage() {
    const { cartItems, removeFromCart, updateQuantity } = useCart();

    const handleQuantityChange = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
        const quantity = parseInt(event.target.value, 10);
        if (quantity > 0) {
            updateQuantity(id, quantity);
        }
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className='cartPage'>
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link href="/products">Start shopping</Link></p>
            ) : (
                <div className='cartItems'>
                    {cartItems.map((item) => (
                        <div key={item.id} className='cartItem'>
                            <img src={`/images/${item.id}.png`} alt={item.name} className='productImage' />
                            <div className='productDetails'>
                                <h2>{item.name}</h2>
                                <p>${item.price}</p>
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e)}
                                    min="1"
                                    className='quantityInput'
                                />
                            </div>
                            <div className='actions'>
                                <button onClick={() => removeFromCart(item.id)} className='removeButton'>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className='cartSummary'>
                        <p>Total: ${totalPrice.toFixed(2)}</p>
                        <Link href="/checkout">
                            <button className='checkoutButton'>Proceed to Checkout</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
