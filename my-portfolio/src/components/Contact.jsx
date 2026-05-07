function Contact() {
    return (
         <>
            <section className="contact" id="contact">
                <div className="contact-left fade-up">
                    <p className="section-label">Get in touch</p>
                    <h2 className="section-heading">Let's build something bold</h2>
                    <p className="contact-tagline"> I'm open to freelance projects, collaborations, and opportunities. If you have a problem worth solving, I'd love to hear about it.</p>
                </div>
                <div className="contact-right fade-up delay-1">
                    <a href="mailto:technjeri25@gmail.com" className="contact-link">Email<span>→</span></a>
                    <a href="#" className="contact-link">LinkedIn <span>↗</span></a>
                    <a href="#" className="contact-link">Github <span>↗</span></a>
                    <a href="#" className="contact-link">Download CV <span>↓</span></a>
                    
                </div>
            </section>
         </>
    )
}

export default Contact