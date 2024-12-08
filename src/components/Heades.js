import React from "react";
import logo from "../images/logo.png";

export default function Header() {
    return (
        <header className="header-main-div">
            <img className="header-logo" src={logo} alt="Logo" />
            <ul className="nav-list">
            <li className="nav-item">
    <a href="#about" className="nav-link">About</a>
</li>
<li className="nav-item">
    <a href="#projects" className="nav-link">Projects</a>
</li>
<li className="nav-item">
    <a href="#services" className="nav-link">Services</a>
</li>
<li className="nav-item active">
    <a href="#contact" className="nav-link">Contact</a>
</li>

            </ul>
        </header>
    );
}
