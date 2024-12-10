"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // App Router
import { useSearchParams } from "next/navigation"; // This is for retrieving query params in the App Router
import axios from "axios";
import '../styles/components/success.css'; // Assuming you have CSS for success page

const SuccessPage = () => {
  const router = useRouter();
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  // Use useSearchParams to access query parameters in the App Router
  const searchParams = useSearchParams();
  const session_id = searchParams.get('session_id'); // Retrieve 'session_id' from the query string

  useEffect(() => {
    const fetchSession = async () => {
      if (session_id) {
        try {
          const response = await axios.post("http://localhost:5000/api/checkout/get-checkout-session", { sessionId: session_id });
          setSession(response.data);
        } catch (err) {
          console.error("Error fetching session:", err);
          setError("Failed to retrieve payment session. Please try again.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSession();
  }, [session_id]); // Dependency array ensures this effect runs only when session_id changes

  return (
    <div className="successPage">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="successMessage">
          <h1>Payment Successful!</h1>
          <p>Thank you for your purchase!</p>
          <div>
            <h3>Order Details:</h3>
            <p><strong>Order ID:</strong> {session.id}</p>
            <p><strong>Amount Paid:</strong> ${session.amount_total / 100}</p>
            <p><strong>Customer Email:</strong> {session.customer_email}</p>
          </div>
          <button onClick={() => router.push("/products")}>Go Back to Products</button>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
