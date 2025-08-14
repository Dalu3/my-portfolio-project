import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const refreshPage = () => {
    window.location.reload(); 
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header-main-div" ref={menuRef}>
      <img
        className="header-logo"
        src={logo}
        alt="Logo"
        onClick={refreshPage} 
        style={{ cursor: "pointer" }}
      />

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
          <a href="#experience" className="nav-link" onClick={() => setMenuOpen(false)}>
            Experience
          </a>
        </li>

        <li className="nav-item">
          <a href="#education" className="nav-link" onClick={() => setMenuOpen(false)}>
            Education
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
