function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="section-title">LET'S 
                    <span className="accent-text"> TALK</span>
                </h2>
                
                <p className="contact-description">
                    Open to junior roles, internships, and interesting projects.
                    <br />
                    Feel free to reach out — I'd love to hear from you.
                </p>

                <div className="contact-links">
                    <a href="mailto:stefano.marinaro2015@gmail.com" className="contact-link">
                        → ✉️ stefano.marinaro2015@gmail.com
                    </a>
                    <a href="https://github.com/Stefano-Marinaro" target="_blank" rel="noopener noreferrer" className="contact-link">
                        → GitHub Profile
                    </a>
                    <a href="https://www.linkedin.com/in/stefano-marinaro-1b0b4a1b6/" target="_blank" rel="noopener noreferrer" className="contact-link">
                        → LinkedIn
                    </a>
                </div>

                <div className="contact-footer">
                    <p className="footer-text">Available for internships & junior roles<br />Based in Perugia, Italy</p>
                </div>
            </div>
        </section>
    )
}

export default Contact