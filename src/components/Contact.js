import React from "react";

export default function Contact(){
    return(
        <section className="contact-main-section">
            <p className="contact-question">What’s next?</p>
            <h2 className="contact-get-in-touch">Get In Touch</h2>
            <p className="contact-paragraph">I’m currently looking for new opportunities, so feel free to reach out! Whether you have a question, a potential collaboration, or just want to chat my inbox is always open, and I’ll do my best to get back to you promptly.</p>
            <button
            className="contact-button"
            onClick={() => {
                window.open('mailto:daria.lysunets03@gmail.com', '_self');
            }}
            >
            Say Hello
            </button>
        </section>
    )
}