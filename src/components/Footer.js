import React from "react"

export default function Footer(){
    return(
        <footer className="footer">
            <hr className="footer-line" />
            <div className="footer-content">
                <p className="footer-message">
                Send me a message by email 
               <a href="mailto:daria.lysunets03@gmail.com" className="footer-icon-link">
                <i className="footer-icon">🔗</i>
                </a>

                or just simply use my 
                <a href="https://www.linkedin.com/in/daria-lysunets/" target="_blank" className="footer-link">
                    LinkedIn Page
                </a>
                </p>
            </div>
            <p className="footer-copyright">© 2024 Daria Lysunets</p>
        </footer>
    )
}



