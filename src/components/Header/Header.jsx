import React, { useEffect, useRef, useState } from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import OutsideClickHandler from 'react-outside-click-handler'


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const menuIconRef = useRef(null)
  const handleOutsideClick=(event)=>{
    if(menuIconRef.current && !menuIconRef.current.contains(event.target)){
      setMenuOpened(false)
    }
  }

  useEffect(()=>{
    if(menuOpened){
      document.addEventListener("click", handleOutsideClick)
    } else {
      document.removeEventListener("click", handleOutsideClick)
    }

    return()=>{
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [menuOpened])

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
            <ul className="flexCenter h-menu" style={{right: !menuOpened && "-100%"}}>
                <li><div onClick={() => handleMenuClick("hero")}>Home</div></li>
                {/* <li><div onClick={() => handleMenuClick("about")}>About</div></li> */}
                <li><div onClick={() => handleMenuClick("skills")}>Skills</div></li>
                <li><div onClick={() => handleMenuClick("portfolio")}>Portfolio</div></li>
                {/* <li><div onClick={() => handleMenuClick("contact")}>Contact</div></li> */}
            </ul>
            </OutsideClickHandler>

            <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)} ref={menuIconRef}>
            <FontAwesomeIcon icon={faBars} size="xl" />
            </div>
        </div>
    </section>
  )
}

export default Header