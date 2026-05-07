function About() {
    return (
        <>
            <section className="section" id="about" >
                <p className="section-label fade-up">About me</p>
                <h2 className="section-heading fade-up delay-1">
                    I design <em>and</em> build - the whole picture
                </h2>
                <div className="about-grid">
                    <div className="about-text fade-up delay-2">
                        <p>I'm <b>Joy Njeri Wairimu</b> - a web developer and learning UI designer based in Nairobi. I sit at the intersection of code and creativity, bridging the gap between how things look and how they work.</p>
                        <p>My approach is simple: <strong>solve real problems creativ=ely</strong>, then obsess over every detail until the result is something genuinely worth being proud of. Whether it's a web app or a published interface, I care deeply about both the craft and the impact.</p>
                        <p>I'm actively buiding my portfolio pf web apps and UI/UX projects - always learning, always shipping.</p>
                    </div>
                    <div className="skills-grid fade-up delay-3">
                        <div className="skill-card">
                            <div className="skill-icon">⌨️</div>
                            <div className="skill-name">Frontend Dev</div>
                            <div className="skill-tags">HTML · CSS · JavaScript · React</div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🎨</div>
                            <div className="skill-name">UI Design</div>
                            <div className="skill-tags">Figma · Wireframes · Design Systems</div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">📐</div>
                            <div className="skill-name">UX 
                                Thinking</div>
                            <div className="skill-tags">User flows · Prototyping · Research</div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">🔧</div>
                            <div className="skill-name">Web Apps</div>
                            <div className="skill-tags">Responsive · Accessible · Fast</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About