import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaBookOpen,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
        <FaBars />
      </button>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2 className="sidebar-title">Sunjida Rine</h2>
        <ul>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              <FaHome className="icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              <FaUser className="icon" /> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              <FaProjectDiagram className="icon" /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" onClick={closeMenu}>
              <FaTools className="icon" /> Skills
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" onClick={closeMenu}>
              <FaBookOpen className="icon" /> Research
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              <FaEnvelope className="icon" /> Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
