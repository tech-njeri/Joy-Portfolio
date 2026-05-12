import './componentStyles.css'

function Process() {
    return (
        <>
            <section className="section" id="process">
                <p className="section-label fade-up">How I work</p>
                <h2 className="section-heading fade-up delay-1">A process built on <em>curiosity</em></h2>
                <div className="process-steps">
                    <div className="step fade-up">
                        <div className="step-num">01</div>
                        <div className="step-title">Discover</div>
                        <div className="step-desc"> I start by deeply understanding the problem — asking the right questions, researching users, and finding what really matters.</div>
                    </div>
                    <div className="step fade-up delay-1">
                        <div className="step-num">02</div>
                        <div className="step-title">Design</div>
                        <div className="step-desc"> Wireframes, flows, and high-fidelity UI — I design with both aesthetics and usability in mind, always iterating.</div>
                    </div>
                    <div className="step fade-up delay-2">
                        <div className="step-num">03</div>
                        <div className="step-title">Build</div>
                        <div className="step-desc"> Clean, semantic code brought to life. I obsess over the details — from animation timing to accessibility.</div>
                    </div>
                    <div className="step fade-up delay-3">
                        <div className="step-num">04</div>
                        <div className="step-title">Refine</div>
                        <div className="step-desc"> I test, get feedback, and keep polishing until the result genuinely works — and genuinely delights.</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Process