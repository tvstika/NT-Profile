import React from 'react'
import "./Skill.css"

const Skill = () => {
  return (
    <section id="skills" className="skill-wrapper">
        <div className="skill-container flexCenter paddings innerWidth">
        <h2 className="skill-title flexCenter paddings innerWidth">Skills</h2>
            {/* Left */}
            <div className="skillbox-left">
            <h3 className="skill-title secondaryText flexCenter">Frontend</h3>
                <div className="skillgroup secondaryText flexColStart">
                    <h3 className="skill-name">HTML</h3>
                    <h3 className="skill-level">intermediate</h3>
                </div>
                <div className="skillgroup secondaryText flexColStart">
                    <h3 className="skill-name">CSS</h3>
                    <h3 className="skill-level">intermediate</h3>
                </div>
                <div className="skillgroup secondaryText flexColStart">
                    <h3 className="skill-name">JavaScript</h3>
                    <h3 className="skill-level">basic</h3>
                </div>
                <div className="skillgroup secondaryText flexColStart">
                    <h3 className="skill-name">React.js</h3>
                    <h3 className="skill-level">intermediate</h3>
                </div>
                <div className="skillgroup secondaryText flexColStart">
                    <h3 className="skill-name">Flutter</h3>
                    <h3 className="skill-level">intermediate</h3>
                </div>
            </div>

            {/* Center */}
            <div className="skillbox-center">
                <h3 className="skill-title secondaryText flexCenter">Backend</h3>
                <div className="skillgroup secondaryText flexColStart">
                    <h3 className="skill-name">PHP</h3>
                    <h3 className="skill-level">basic</h3>
                </div>
                <div className="skillgroup secondaryText flexColStart">
                    <h3 className="skill-name">Firebase</h3>
                    <h3 className="skill-level">basic</h3>
                </div>
            </div>

            {/* Right */}
            <div className="skillbox-right">
                <h3 className="skill-title secondaryText flexCenter">Graphic Design</h3>
                <div className="skillgroup secondaryText flexColStart">
                    <h3 className="skill-name">Adobe Ilustrator</h3>
                    <h3 className="skill-level">intermediate</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skill