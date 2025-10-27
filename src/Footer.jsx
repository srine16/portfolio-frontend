import React from "react";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {currentYear} <strong>Sunjida Rine</strong> — All Rights Reserved.
      </p>
      <p>
        Designed & Developed by <span className="highlight">Sunjida Rine</span> |{" "}
        <span className="university">Brunel University London</span>
      </p>
    </footer>
  );
}
