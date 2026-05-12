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
                    <a 
                    href="mailto:technjeri25@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                    target="_blank"
                    >Email<span>→</span></a>
                    <a 
                    href="https://www.linkedin.com/in/joynjeri21/" 
                    className="contact-link"
                    target="_blank"
                    >LinkedIn <span>↗</span></a>
                    <a href="https://github.com/tech-njeri"
                    className="contact-link" 
                    target="_blank">
                        Github
                    </a>
                    <a href="https://docs.google.com/document/d/14BEbEzL8bvMRG-apnU04nB4BGx62NBfh/edit?usp=sharing&ouid=102742715531976949726&rtpof=true&sd=true" className="contact-link"
                    target="_blank">Download CV <span>↓</span></a>
                    
                </div>
            </section>
         </>
    )
}

export default Contact