import React from 'react'
import "./Portfolio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  return (
    <section className="porto-wrapper">
      <div className="porto-container flexCenter paddings innerWidth">
        <h2 className="porto-title flexCenter paddings innerWidth">Portfolio</h2>
        {/* Left */}
        <div className="portobox flexColStart">
          <img src="./porto01.PNG" alt="" className="porto" />
          <h3 className="porto-name">Web Design</h3>
          <a href="https://tvstika.github.io/KKL2023-4TI/" className="porto-demo secondaryText">
            Demo
            <span> </span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </a>
        </div>

        {/* Right */}
        <div className="portobox flexColStart">
          <img src="porto02.PNG" alt="" className="porto" />
          <h3 className="porto-name">Web Design</h3>
          <a href="https://real-estate-learn-reactjs.vercel.app/" className="porto-demo secondaryText">
            Demo
            <span> </span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio