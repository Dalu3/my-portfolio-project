import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu element

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    // Check if the click happened outside the menu and menu icon
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener to the document
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header-main-div" ref={menuRef}>
      <img className="header-logo" src={logo} alt="Logo" />
      <button className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <span className="hamburger-icon">&#9776;</span>
        )}
      </button>
      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}