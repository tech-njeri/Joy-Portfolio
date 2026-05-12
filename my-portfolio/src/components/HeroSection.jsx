import './componentStyles.css'

function HeroSection() {
    return (
        <>
            <section className="hero" id='home'>
                <div className="hero-left">
                    <p className='availability-profile'>AVAILABLE FOR PROJECTS</p>
                    <h1 className='hero-name'>
                        Joy 
                        <br></br>
                        <span>Njeri</span>
                        <br></br>
                        Wairimu</h1>

                    <p className='hero-title'>Web Developer & UI Designer</p>

                    <p className='hero-desc'><strong>I build things people actually love using</strong> - by solving problems creatively and obsessing over every detail. From pixel-perfect interfaces to production-ready web apps.</p>
                
                    <div className='hero-buttons'>
                        <a href="#work" className='btn-primary'>View my work</a>
                        <a href="#contact" className='btn-outline'>Let's talk</a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className='hero-bg-block'></div>
                    <div className='hero-bg-letter'>J</div>
                    <div className='hero-tag'>JOY NJERI WAIRIMU - PORTFOLIO 2025</div>
                    
                    <div className='hero-stats'>
                        <div className='stat'>
                            <div className='stat-num'>UI</div>
                            <div className='stat-label'>Designer</div>
                        </div>
                        <div className='stat'>
                            <div className='stat-num'>Dev</div>
                            <div className='stat-label'>Frontend</div>
                        </div>
                        <div className='stat'>
                            <div className='stat-num'>∞</div>
                            <div className='stat-label'>curiosity</div>
                        </div>

                    </div>

                    <div className='hero-badge'>
                        <p>DETAIL-OBSESSED PROBLEM SOLVER</p>
                    </div>

                    <div className='hero-scroll-hint'>
                        Scroll
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;