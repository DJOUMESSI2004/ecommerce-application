// "use client";

// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import Link from "next/link";
// import '../styles/components/checkout.css'

// export default function CheckoutPage() {
//     const { cartItems } = useCart();
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         address: "",
//         city: "",
//         postalCode: "",
//         country: "USA",
//     });

//     const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// ) => {
//     const { name, value } = e.target;

//     // Update formData with the new value
//     setFormData({ ...formData, [name]: value });
// };


//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         // Handle the form submission (e.g., processing the payment, etc.)
//         alert("Order placed successfully!");
//     };

//     const totalPrice = cartItems.reduce(
//         (acc, item) => acc + item.price * item.quantity,
//         0
//     );

//     return (
//         <div className="checkoutPage">
//             <h1>Checkout</h1>

//             {/* Cart Summary */}
//             <div className="cartSummary">
//                 <h2>Your Cart</h2>
//                 <div className="cartItems">
//                     {cartItems.map((item) => (
//                         <div key={item.id} className="cartItem">
//                             <img
//                                 src={`/images/${item.id}.png`}
//                                 alt={item.name}
//                                 className="productImage"
//                             />
//                             <div className="productDetails">
//                                 <h2>{item.name}</h2>
//                                 <p>
//                                     ${item.price} × {item.quantity} = $
//                                     {(item.price * item.quantity).toFixed(2)}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="totalPrice">
//                     <p>Total: ${totalPrice.toFixed(2)}</p>
//                 </div>
//             </div>

//             {/* Billing Information Form */}
//             <form onSubmit={handleSubmit} className="billingForm">
//                 <h3>Billing Information</h3>
//                 <div className="formField">
//                     <label htmlFor="name">Full Name</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div className="formField">
//                     <label htmlFor="email">Email Address</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div className="formField">
//                     <label htmlFor="address">Address</label>
//                     <input
//                         type="text"
//                         id="address"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div className="formField">
//                     <label htmlFor="city">City</label>
//                     <input
//                         type="text"
//                         id="city"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div className="formField">
//                     <label htmlFor="postalCode">Postal Code</label>
//                     <input
//                         type="text"
//                         id="postalCode"
//                         name="postalCode"
//                         value={formData.postalCode}
//                         onChange={handleInputChange}
//                         required
//                     />
//                 </div>
//                 <div className="formField">
//                     <label htmlFor="country">Country</label>
//                     <select
//                         id="country"
//                         name="country"
//                         value={formData.country}
//                         // onChange={handleInputChange}
//                     >
//                         <option value="USA">USA</option>
//                         <option value="Canada">Canada</option>
//                         <option value="UK">UK</option>
//                     </select>
//                 </div>

//                 <div className="formActions">
//                     <button type="submit" className="checkoutButton">
//                         Place Order
//                     </button>
//                 </div>
//             </form>

//             {/* Back to Cart */}
//             <div className="backToCart">
//                 <Link href="/cart">
//                     <button className="backButton">Back to Cart</button>
//                 </Link>
//             </div>
//         </div>
//     );
// }
