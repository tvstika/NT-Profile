import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="ul flexCenter paddings innerWidth h-container">
            <a href="" className="navLogo">Tika</a>

            <ul className="flexCenter h-menu">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
            </ul>

            <div className="menu-icon">
            <FontAwesomeIcon icon={faBars} size="xl" />
            </div>
        </div>
    </section>
  )
}

export default Header