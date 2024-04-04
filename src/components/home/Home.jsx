import React, { useRef } from "react";
import styles from "./Home.module.css"
import About from "../about/About";
import NavBar from "../navBar/NavBar";
import head from "../utilities/image/banner-img.png"
import cv from "../utilities/archivos/CVNelsonGVasquez.pdf"
import { BiDownload } from 'react-icons/bi';
import Portfolio from "../portafolio/Portafolio";
import WorkExperience from "../workExperience/WorkExperience";



function Home() {

  const about = useRef(null);
  const home = useRef(null);
  const port = useRef(null);
  const portafolioRef = useRef(null);
  const contactoRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
      duration: 100
    });
  };

  const handleClick = (event) => {
    scrollToRef(about)
  }

  const handleClickPor = (event) => {
    scrollToRef(port)
  }

  const handleClickHome = (event) => {
    scrollToRef(home)
  }


  return (
    <div className={styles.principalHome}>

      <section ref={home}>
        <div className={styles.principalDiv}>
          <NavBar handleClick={handleClick} handleClickPor={handleClickPor} handleClickHome={handleClickHome} />
          <div className={styles.home}>
            <About />
            <div className={styles.InfoAndImageContainer}>
              <div className={styles.hello}>
              </div>
            </div>
            {/* -------------------esferas------------------------- */}
            <div className={styles.esferasContainer}>
              <div className={styles.girarContainer1}>
                <div className={styles.girar}>
                  <span className={styles.span1}></span>
                </div>

                <div className={styles.girarIzq}>
                  <span className={styles.span1}></span>
                </div>

                <div className={styles.girarDer}>
                  <span className={styles.span1}></span>
                </div>
              </div>

              <div className={styles.girarContainer1}>
                <div className={styles.girarDer}>
                  <span className={styles.span1}></span>
                </div>

                <div className={styles.girar}>
                  <span className={styles.span1}></span>
                </div>

                <div className={styles.girarIzq}>
                  <span className={styles.span1}></span>
                </div>
              </div>

              <div className={styles.girarContainer1}>
                <div className={styles.girarIzq}>
                  <span className={styles.span1}></span>
                </div>

                <div className={styles.girarDer}>
                  <span className={styles.span1}></span>
                </div>

                <div className={styles.girar}>
                  <span className={styles.span1}></span>
                </div>
              </div>

              <div className={styles.girarContainer1}>
                <div className={styles.girar}>
                  <span className={styles.span1}></span>
                </div>

                <div className={styles.girarIzq}>
                  <span className={styles.span1}></span>
                </div>

                <div className={styles.girarDer}>
                  <span className={styles.span1}></span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      {/* -------------------END esferas------------------------- */}

      <section ref={about}>
        <WorkExperience />
      </section>

      <section ref={port}>
        <Portfolio />
      </section >
    </div>
  )
}

export default Home



