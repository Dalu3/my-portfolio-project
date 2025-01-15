import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu if clicked outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // Refresh the page when logo is clicked
  const refreshPage = () => {
    window.location.reload(); // Refresh the page
    setMenuOpen(false); // Close the menu if it's open
  };

  // Add/remove event listener for clicks outside the menu
  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header-main-div" ref={menuRef}>
      {/* Logo */}
      <img
        className="header-logo"
        src={logo}
        alt="Logo"
        onClick={refreshPage} // Refresh the page on click
        style={{ cursor: "pointer" }}
      />

      {/* Hamburger menu button */}
      <button className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? (
          <span className="close-icon">&times;</span>
        ) : (
          <span className="hamburger-icon">&#9776;</span>
        )}
      </button>

      {/* Navigation menu */}
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
