import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";

const styles = {
  wrapper: {
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    background: "#e6e5e5",
  },
  card: {
    maxWidth: "440px",
    width: "100%",
    textAlign: "center",
    padding: "40px 32px",
    borderRadius: "16px",
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
  },
  icon: {
    width: "64px",
    height: "64px",
    margin: "0 auto 20px",
    borderRadius: "50%",
    background: "#e6f7ee",
    color: "#16a34a",
    fontSize: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { margin: "0 0 8px", fontSize: "26px", color: "#111827" },
  text: { margin: "0 0 28px", fontSize: "16px", color: "#6b7280" },
  button: {
    display: "inline-block",
    padding: "12px 28px",
    borderRadius: "8px",
    background: "#111827",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 600,
  },
};

const ThankYou = () => {
  return (
    <Layout>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.icon}>✓</div>
          <h1 style={styles.title}>Thank You!</h1>
          <p style={styles.text}>
            Your form has been submitted successfully. We'll get back to you
            shortly.
          </p>
          <Link href="/" style={styles.button}>
            Back to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;