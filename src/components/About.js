import React from "react";
import photo from "../images/photo.jpg"

export default function About(){
    return(
        <section class="about-section">
            <h2 class="section-title">About me</h2>
            <div class="about-container">
                <div class="about-text">
                    <p>
                        I am Daria and I love creating and designing user-friendly websites. I am now dedicated to improving my skills in modern web development frameworks such as React. My main goal is to develop high-quality websites and provide users with a positive experience.
                    </p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <div class="technologies">
                        <ul>
                            <li> HTML</li>
                            <li> CSS</li>
                            <li> JavaScript</li>
                        </ul>
                        <ul>
                            <li> TypeScript</li>
                            <li> React</li>
                            <li> Git/GitHub</li>
                        </ul>
                    </div>

                </div>
                <div class="about-image">
                    <img src={photo} alt="Daria Lysunets" />
                </div>
            </div>
        </section>
    )
}