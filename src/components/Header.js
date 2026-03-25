import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const refreshPage = () => {
    window.location.reload();
    closeMenu();
  };

  useEffect(() => {
    const { body } = document;
    const { documentElement } = document;
    const previousOverflow = body.style.overflow;
    const previousRootOverflow = documentElement.style.overflow;

    if (isMenuOpen) {
      body.style.overflow = "hidden";
      documentElement.style.overflow = "hidden";
    }

    return () => {
      body.style.overflow = previousOverflow;
      documentElement.style.overflow = previousRootOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1030) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="header-main-div">
        <img
          className="header-logo"
          src={logo}
          alt="Logo"
          onClick={refreshPage}
          style={{ cursor: "pointer" }}
        />

        <div className="header-nav-shell">
          <button
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="site-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="menu-icon-line"></span>
            <span className="menu-icon-line"></span>
            <span className="menu-icon-line"></span>
          </button>

          <ul
            id="site-navigation"
            className={`nav-list ${isMenuOpen ? "open" : ""}`}
          >
            {navItems.map((item) => (
              <li className="nav-item" key={item.href}>
                <a href={item.href} className="nav-link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <button
        type="button"
        className={`menu-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
        aria-label="Close navigation menu"
        aria-hidden={!isMenuOpen}
        tabIndex={isMenuOpen ? 0 : -1}
      ></button>
    </>
  );
}
