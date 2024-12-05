import React from "react";
import logo from "../images/logo.png"

export default function Header(){
    return(
        <header className="header-main-div">
            <img className="header-logo" src={logo}/>
            <ul className="nav-list">
                <li className="nav-item">About</li>
                <li className="nav-item">Projects</li>
                <li className="nav-item">Services</li>
                <li className="nav-item active">Contact</li>
            </ul>
        </header>
    )
}