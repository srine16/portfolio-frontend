import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import AOS from "aos";
import "aos/dist/aos.css";
import profilePic from "./profile.jpg";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate(); // ✅ Initialize navigation

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="home" className="home">
      {/* ====== Profile Section ====== */}
      <div className="profile-container" data-aos="fade-down">
        <div className="profile-ring">
          <img
            src={profilePic}
            alt="Portrait of Sunjida Rine"
            className="profile-pic"
          />
        </div>
      </div>

      {/* ====== Text Section ====== */}
      <h1 className="hero-name" data-aos="fade-up" data-aos-delay="100">
        Sunjida Rine
      </h1>
      <h3 className="hero-title" data-aos="fade-up" data-aos-delay="200">
        BSc (Hons) Computer Science with Artificial Intelligence — Brunel
        University London
      </h3>

      <p className="hero-text" data-aos="fade-up" data-aos-delay="300">
        I’m a <strong>Full-Stack Developer</strong> specializing in{" "}
        <strong>Java, Spring Boot, SQL, and React</strong>. Passionate about
        building intelligent, data-driven applications that merge elegant
        design, efficient backend systems, and user-centered interfaces.
      </p>

      {/* ====== Buttons Section ====== */}
      <div className="hero-buttons" data-aos="fade-up" data-aos-delay="500">
        <a
          href="/SUNJIDARineResume.pdf"
          download="Sunjida_Rine_CV.pdf"
          className="btn-primary"
        >
          📄 Download CV
        </a>

        {/* ✅ Fixed Explore Button */}
        <button
          className="btn-secondary"
          onClick={() => navigate("/about")}
        >
          ↓ Explore More
        </button>
      </div>
    </section>
  );
}
