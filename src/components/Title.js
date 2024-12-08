import React from "react";
import logo from "../images/logo.png"

export default function Title(){
    return(
        <div className="title-main-div">
            <p className="title-greeting">Hi, my name is</p>
            <h1 className="title-name">Daria Lysunets.</h1>
            <h2 className="title-subheader">I build things for the web.</h2>
            <p className="title-paragraph">
            I am a front-end web developer specialising in building (and sometimes designing) exceptional digital experiences. I enjoy making user interfaces understandable and turning ideas into functional, visually appealing websites.
            </p>
            <button
            className="title-button"
            onClick={() => {
                window.open('mailto:daria.lysunets03@gmail.com', '_self');
            }}
            >
            Get In Touch
            </button>

            <div class="vertical-text">
                daria.lysunets03@gmail.com
            </div>
        </div>
    )
}