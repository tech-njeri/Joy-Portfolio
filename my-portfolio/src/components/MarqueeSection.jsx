function MarqueeSection() {
    return (
        <>
            <div className="marquee-wrap" aria-hidden="true">
                <div className="marquee-track">
                    <div className="marquee-item">
                        Web Development
                        <span className="marquee-dot"></span>
                    </div>
                    <div className="marquee-item">
                        UI Design
                        <span className="marquee-dot"></span>
                    </div>
                    <div className="marquee-item">
                        React & JavaScript
                        <span className="marquee-dot"></span>
                    </div>
                    <div className="marquee-item">
                        User Experience
                        <span className="marquee-dot"></span>
                    </div>
                    <div className="marquee-item">
                        Problem Solving
                        <span className="marquee-dot"></span>
                    </div>
                    <div className="marquee-item">
                        Detail-oriented
                        <span className="marquee-dot"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarqueeSection;