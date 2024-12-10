import React from "react";
import Link from "next/link";

const CancelPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Order Canceled</h1>
      <p style={styles.text}>
        We're sorry to see you go! Your order has been canceled, and no payment was made.
      </p>
      <p style={styles.text}>
        If you have any questions or need assistance, feel free to reach out to our support team.
      </p>
      <Link href="/products" style={styles.link}>
        Go back to the Shop
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center" as const,
    padding: "2rem",
    margin: "0 auto",
    maxWidth: "600px",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  link: {
    display: "inline-block",
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#0070f3",
    color: "#ffffff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1rem",
  },
};

export default CancelPage;
