import React, {useRef} from "react";
import styles from "./Home.module.css"
import About from "../about/About";
import NavBar from "../navBar/NavBar";
import head from "../utilities/image/banner-img.png"
import cv from "../utilities/archivos/CVNelsonGVasquez.pdf"
import{ BiDownload }from 'react-icons/bi';
import Portfolio from "../portafolio/Portafolio";



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
  

    return(
    <div className={styles.principalHome}>
      <section ref={home}>
        <div className={styles.principalDiv}>
          <NavBar handleClick={handleClick} handleClickPor={handleClickPor} handleClickHome={handleClickHome}/>
            <div className={styles.home}>
            
            <div className={styles.InfoAndImageContainer}>
              <div className={styles.hello}>
                <h1> Hola, Soy Giovanny</h1>
                <h2>Full stack developer</h2>
                <p>Soy una persona proactiva, excelente
                  compañero de equipo, organizado y
                  responsable. Disfruto mucho adquiriendo
                  nuevos conocimientos , mi objetivo es un
                  puesto desafiante y dinámico donde pueda
                  compartir mi experiencia y a su vez sumar
                  nuevos conocimientos</p>
                <a href={cv} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>Download CV <BiDownload className={styles.iconDownLoad}/></a>
              </div>
              <div>
                <img className={styles.bannerImg} src={head} alt="" />
              </div>
            </div>

          {/* -------------------esferas------------------------- */}
            <div>
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
      </section>
        {/* -------------------END esferas------------------------- */}         

      <section ref={about}>
        <About/>
      </section>

      <div className={styles.port} ref={port}>
        <Portfolio/>
      </div >

    </div>
    )

    
}

export default Home



