import React, { useState, useEffect } from "react"
import styles from "./NavBar.module.css"
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaPhoneAlt, FaInstagram } from 'react-icons/fa';




function NavBar(props) {
  const [showNavbar, setShowNavbar] = useState(true)
  const [showMenu, setShowMenu] = useState(false)


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };
  const handleMenu = () => {
    setShowMenu(!showMenu)
  };

  return (

    <header className={styles.headerArea}>
      <div>
        <div >
          <div className={showNavbar ? styles.iconsContainer : styles.iconsContainerHide}>
            <div className={styles.socialMedia}>
              <a target="_blank" href="https://www.linkedin.com/in/ngvb/" className={styles.liDiv}><FaLinkedinIn className={styles.iconLinkedin} /></a>
              <a target="_blank" href="https://github.com/gioh2020" className={styles.liDiv}><FaGithub className={styles.gitHub} /></a>
              <a target="_blank" href="https://api.whatsapp.com/send?phone=%2B573016444226&text=" className={styles.liDiv}> <FaWhatsapp className={styles.whatsapp} /></a>
              <a target="_blank" href="https://www.instagram.com/gi0h/" className={styles.liDiv}> <FaInstagram className={styles.whatsapp} /></a>
            </div>
            <div className={styles.divPhone}>
              <a href="tel:+573016444226"><FaPhoneAlt className={styles.iconPhone} /> (+57) 301 644-42-26</a>
            </div>

          </div>

        </div>
        <div className={showNavbar ? styles.header : styles.headerFixed}>
          <a href="" onClick={props.handleClick} value="home" className={styles.navName}>
            <span>Gio</span>-H
          </a>
          <div className={styles.buttonConatainer}>
            <button onClick={props.handleClickHome}
            >Home</button>
            <button
              onClick={props.handleClick}
              value='about'
            >Experiencia</button>
            <button
              onClick={props.handleClickPor}
              value='portfolio'
            >Portafolio</button>
            {/* <button>Experiences</button> */}
          </div>
          <div className={styles.menu} onClick={handleMenu}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
        </div>
      </div>
      {showMenu ?
        <div className={styles.submenu}>
          <div className={styles.containerSubmenuButtons}>
            <button onClick={() => { props.handleClickHome(); handleMenu(); }}
            >Home</button>
            <button
              onClick={() => { props.handleClick(); handleMenu(); }}
              value='about'
            >Experiencia</button>
            <button
              onClick={() => { props.handleClickPor(); handleMenu(); }}
              value='portfolio'
            >Portafolio</button>
          </div>

          <div className={styles.divPhoneMenu}>
            <a href="tel:+573016444226"><FaPhoneAlt className={styles.iconPhone} /> (+57) 301 644-42-26</a>
          </div>

          <div className={styles.socialMediaMenu}>
            <a target="_blank" href="https://www.linkedin.com/in/ngvb/" className={styles.liDiv}><FaLinkedinIn className={styles.iconLinkedin} /></a>
            <a target="_blank" href="https://github.com/gioh2020" className={styles.liDiv}><FaGithub className={styles.gitHub} /></a>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=%2B573016444226&text=" className={styles.liDiv}> <FaWhatsapp className={styles.whatsapp} /></a>
            <a target="_blank" href="https://www.instagram.com/gi0h/" className={styles.liDiv}> <FaInstagram className={styles.whatsapp} /></a>
          </div>



        </div> : null
      }
    </header>

  )
}

export default NavBar