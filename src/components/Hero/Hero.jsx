import React from 'react'
import "./Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquareBehance } from '@fortawesome/free-brands-svg-icons'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerwidth flexCenter hero-container">
            {/* Left */}
            <div className="flexColStart hero-left">
                <a href="https://linkedin.com/in/nityasa-tustika-a63420291" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>

                <a href="https://github.com/tvstika" className="social-icon">
                <FontAwesomeIcon icon={faSquareGithub} size="3x" />
                </a>

                <a href="https://wa.me/628995172233" className="social-icon">
                <FontAwesomeIcon icon={faSquareWhatsapp} size="3x" />
                </a>

                <a href="mailto:tustika.nityasa@gmail.com" className="social-icon">
                <FontAwesomeIcon icon={faSquareEnvelope} size="3x" />
                </a>

                <a href="https://www.behance.net/nityasatustika" className="social-icon">
                <FontAwesomeIcon icon={faSquareBehance} size="3x" />
                </a>
            </div>

            {/* Center */}
            <div className="flexColStart hero-center">
                <div className="blob"></div>
            </div>

            {/* Right */}
            <div className="flexColStart hero-right">
                <div className="hero-title">
                    <h1 className='primaryText'>Nityasa Tustika</h1>
                </div>
                <div className="flexColStart hero-desc">
                    <span>A computer science student with a strong interest <br /> in 
                    website programming, UI/UX, graphic design, <br /> and also interested in game development.</span>
                    <span>Recognized for my creativity, <br /> strong work ethic, and adaptability.</span>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Hero