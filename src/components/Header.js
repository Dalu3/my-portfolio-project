import React, { useState } from "react";
import logo from "../images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-main-div">
      <img className="header-logo" src={logo} alt="Logo" />
      <button className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">&times;</span> // Close icon
        ) : (
          <span className="hamburger-icon">&#9776;</span> // Hamburger icon
        )}
      </button>
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="#about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

