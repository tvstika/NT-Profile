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

  const handleMenuClick=(sectionId)=>{
    const targetElement = document.getElementById(sectionId);
    if (targetElement){
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      })
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <a href="" className="navLogo">Tika</a>

            <OutsideClickHandler
            onOutsideClick={()=>{setMenuOpened(false)}}>
            <ul className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <li><div onClick={() => handleMenuClick("hero")}>Home</div></li>
                {/* <li><div onClick={() => handleMenuClick("about")}>About</div></li> */}
                <li><div onClick={() => handleMenuClick("skills")}>Skills</div></li>
                <li><div onClick={() => handleMenuClick("portfolio")}>Portfolio</div></li>
                {/* <li><div onClick={() => handleMenuClick("contact")}>Contact</div></li> */}
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