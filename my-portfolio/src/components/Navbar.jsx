import './componentStyles.css'

function Navbar(){
    return (
        <>
            <nav>
                <div className="nav-logo">Joy</div>
                <ul className="nav-links">
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#work">WORK</a></li>
                    <li><a href="#process">PROCESS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
                <a href="#contact" className='nav-cta'>HIRE ME</a>
            </nav>
        </>
    )
}

export default Navbar;