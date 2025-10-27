import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Research from "./Research";
import Contact from "./Contact";
import Footer from "./Footer";

import "./App.css";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
    AOS.refresh(); // 🔁 Recalculate animations after route change
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/research" element={<Research />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "100px 2rem 2rem 250px" }}>
          <AnimatedRoutes />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
}
