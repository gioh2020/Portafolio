import React, { useState, useEffect } from "react"
import styles from "./NavBar.module.css"
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';




function NavBar(props){
    const [showNavbar, setShowNavbar] = useState(true)


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

    return(
        <header className={styles.headerArea}>
            <div>
                <div >
                    <div className={showNavbar?styles.iconsContainer:styles.iconsContainerHide}>
                    <div className={styles.socialMedia}>
                            <a target="_blank" href="https://www.linkedin.com/in/ngvb/" className={styles.liDiv}><FaLinkedinIn className={styles.iconLinkedin}/></a> 
                            <a target="_blank" href="https://github.com/gioh2020" className={styles.liDiv}><FaGithub className={styles.gitHub}/></a>
                            <a target="_blank" href="https://api.whatsapp.com/send?phone=%2B573016444226&text=" className={styles.liDiv}> <FaWhatsapp className={styles.whatsapp}/></a>           
                        </div>
                        <div className={styles.divPhone}>
                            <a href="tel:+573016444226"><FaPhoneAlt className={styles.iconPhone}/> (+57) 301 644-42-26</a>
                        </div>
                    
                    </div>

                 </div>
                    <div className={showNavbar?styles.header:styles.headerFixed}>
                        <a href="" onClick={props.handleClick} value="home" className={styles.navName}>
                        <span>Gio</span>-H
                        </a>
                        <div>
                        <button
                        onClick={props.handleClick}
                        value='about'
                        >About</button>
                        <button
                        onClick={props.handleClickPor}
                        value='portfolio'
                        >Portafolio</button>
                        {/* <button>Experiences</button> */}
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar