// app/layout.tsx (or _app.tsx)
import './globals.css'; // Import global styles
import { CartProvider } from './context/CartContext';

// app/layout.tsx
import Navbar from "./components/Navbar"
import Footer from './components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My E-commerce Shop</title>
      </head>
      <body>
        <CartProvider>


          {/* Navbar Component */}
          <Navbar />

          {/* Main Content of the Page */}
          <main>{children}</main>

          <footer>
            <Footer />
          </footer>

          
        </CartProvider>

      </body>

    </html>
  );
}
