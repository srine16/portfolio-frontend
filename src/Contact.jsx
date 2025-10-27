import React from "react";
import "./PageStyles.css";

export default function Contact() {
  return (
    <section className="page-section">
      <h1>Contact</h1>
      <p>Let’s connect! I’m always open to collaboration and new opportunities.</p>

      <div className="contact-links">
        <a href="mailto:sunjidarine16@gmail.com">📧 Email</a>
        <a href="https://github.com/srine16" target="_blank" rel="noreferrer">
          💻 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sunjida-rine-5563851a4/"
          target="_blank"
          rel="noreferrer"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  );
}
