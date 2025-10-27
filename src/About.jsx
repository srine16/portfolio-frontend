import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import profilePic from "./profile.jpg";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* ===== Left Side: Image & Info Card ===== */}
        <div className="about-left" data-aos="fade-right">
          <div className="about-card">
            <img
              src={profilePic}
              alt="Sunjida Rine"
              className="about-image"
            />
            <h2>Sunjida Rine</h2>
            <p>BSc (Hons) Computer Science with Artificial Intelligence</p>
            <p>Brunel University London</p>
          </div>
        </div>

        {/* ===== Right Side: Description ===== */}
        <div className="about-right" data-aos="fade-left">
          <h1>About Me</h1>
          <p>
            I’m studying <strong>Computer Science </strong> specializing in{" "}
            <strong>Artificial Intelligence, Full-Stack Development</strong>,
            and data-driven software engineering. My work bridges intelligent
            systems with beautiful design — creating tools that are both smart
            and user-focused.
          </p>

          <p>
            I have hands-on experience with technologies such as{" "}
            <strong>Java, Spring Boot, SQL, Python, React</strong>, and{" "}
            <strong>Machine Learning</strong> frameworks. I enjoy developing
            solutions that make real-world impact — from predictive systems to
            scalable backend architectures.
          </p>

          <p>
            Currently, I’m working on <strong>Forest Guard</strong>, an academic
            AI-powered project aligned with <strong>UN SDG 13 (Climate Action)</strong>,
            designed to monitor and predict deforestation patterns using ML
            models and satellite data.
          </p>

          <div className="about-highlight">
            💡 <em>Actively seeking placement opportunities in Software Engineering and AI Development.</em>
          </div>
        </div>
      </div>
    </section>
  );
}
