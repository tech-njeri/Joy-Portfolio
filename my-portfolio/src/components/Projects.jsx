function Projects() {
    return (
        <>
            <section className="projects" id="work">
                <p className="section-label fade-up">Selected work</p>
                <h2 className="section-heading fade-up delay-1">Projects built with <em>purpose</em>
                </h2>
                <div className="projects-grid">
                    <div className="project-card fade-up">
                        <div className="project-num">01</div>
                        <p className="project-type">Web App</p>
                        <h3 className="project-title">Liora Online Public Library</h3>
                        <p className="project-desc">Liora Library is a public digital knowledge hub that provides free and accessible access to books, educational resources, research materials for readers everywhere.</p>
                        <div className="project-tags">
                            <span className="tag">React</span>
                            <span className="tag">CSS</span>
                            <span className="tag">API</span>
                        </div>
                        <div className="project-links">
                            <button className="github-link">
                                <a href="https://github.com/tech-njeri/liora-online-public-library"
                            className="project-link"  atarget="_blank" rel="noreferrer">
                                ↗ Github
                            </a>
                            </button>
                        </div>
                    </div>
                    <div className="project-card fade-up delay-1">
                        <div className="project-num">02</div>
                        <p className="project-type">UI/UX Design</p>
                        <h3 className="project-title">Project Two</h3>
                        <p className="project-desc">A short description of what this app does and the problem it solves. replace with your real project.</p>
                        <div className="project-tags">
                            <span className="tag">Figma</span>
                            <span className="tag">Prototype</span>
                            <span className="tag">Research</span>
                        <div className="project-arrow">→</div>
                        </div>
                        <div className="project-links">
                            <button className="github-link">
                                <a href="https://github.com/tech-njeri/liora-online-public-library"
                            className="project-link"  atarget="_blank" rel="noreferrer">
                                ↗ Github
                            </a>
                            </button>
                        </div>
                    </div>
                    {/* <div className="project-card fade-up delay-2">
                        <div className="project-num">03</div>
                        <p className="project-type">Web App</p>
                        <h3 className="project-title">Project Three</h3>
                        <p className="project-desc">A short description of what this app does and the problem it solves. replace with your real project.</p>
                        <div className="project-tags">
                            <span className="tag">JavaScript</span>
                            <span className="tag">HTML/CSS</span>
                        <div className="project-arrow">→</div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Projects