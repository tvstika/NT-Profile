import React, { useState } from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import OutsideClickHandler from 'react-outside-click-handler'


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles=(menuOpened) =>{
    if(document.documentElement.clientWidth<=800){
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <a href="" className="navLogo">Tika</a>

            <OutsideClickHandler
            onOutsideClick={()=>{setMenuOpened(false)}}>
            <ul className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            </OutsideClickHandler>

            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
            <FontAwesomeIcon icon={faBars} size="xl" />
            </div>
        </div>
    </section>
  )
}

export default Header