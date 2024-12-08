import React from "react"

export default function Footer(){
    return(
        <footer class="footer">
            <hr class="footer-line" />
            <div class="footer-content">
                <p class="footer-message">
                Send me a message by email 
               <a href="mailto:daria.lysunets03@gmail.com" class="footer-icon-link">
                <i class="footer-icon">🔗</i>
                </a>

                or just simply use my 
                <a href="https://www.linkedin.com/in/daria-lysunets/" target="_blank" class="footer-link">
                    LinkedIn Page
                </a>
                </p>
            </div>
            <p class="footer-copyright">© 2024 Daria Lysunets</p>
        </footer>
    )
}



