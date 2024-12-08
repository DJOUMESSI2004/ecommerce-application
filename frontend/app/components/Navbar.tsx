'use client';

import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

import '../styles/components/navbar.css';
import CartIcon from './CartIcon';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo à gauche */}
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo MyShop"
              width={100}
              height={50}
              priority
            />
          </Link>
          <span className="navbar-text">Street Style</span>
        </div>

        {/* Panier à droite */}
        <div className="navbar-cart">
          <CartIcon/>
        </div>
      </div>
    </nav>
  );
}
