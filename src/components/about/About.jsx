import React from "react";
import styles from "./About.module.css"
import img from "../utilities/image/banner-img22.png"
import cv from "../utilities/archivos/CVNelsonGVasquez.pdf"
import{ BiDownload }from 'react-icons/bi';

function About() {
    return(
        <div  className={styles.principalContainer}>

        <div className={styles.principalDiv}>
            <div className={styles.title}>
                <h1>SOBRE <span>MÍ</span></h1>
                <div className={styles.figureContainer}>
                    <h1 className={styles.bar}></h1>
                    <h1 className={styles.circle}></h1>
                    <h1 className={styles.circle}></h1>
                    <h1 className={styles.bar}></h1>
                </div>
               
            </div>
            <div className={styles.imgInfoContainer}>
                <div>
                    <img className={styles.img} src={img} alt="" />
                </div>
                <div className={styles.info}>
                    <h1>Soy Nelson Giovanny Vasquez Blanco </h1>
                    <h3> Profesional  <span>Full Stack Developer</span>  e <span> Ingeniero Mecánico</span> </h3>
                    <p>Soy un desarrollador con conocimientos
                        en tecnologías como JavaScript, Postgres,
                        Express, React, NodeJS, Redux, HTML y CSS.
                        Durante los últimos años he realizado cursos de
                        desarrollo web y me encuentro aprendiendo un
                        segundo idioma (ingles).
                        Durante los últimos 5 años he ejercido cargos
                        como ingeniero mecánico, donde he adquirido soft
                        skills como: aprendizaje activo, trabajo en equipo,
                        liderazgo, habilidades analíticas, orientación a
                        resultados, entre otras.
                        El desarrollo es un gran aliado para adquirir
                        nuevos conocimientos y desafiar constantemente
                        mi intelecto, esta es una de las cosas que me
                        encanta y por esta razón empecé a construir un
                        rascacielos en torno al desarrollo.
                    </p>
                    <hr />
                    <h2>Informacion Personal</h2>
                    <div className={styles.infoContainer}>
                        <h4>Nombre: <span> Nelson Giovanny Vásquez Blanco</span></h4>
                        <h4>Edad: <span> 31 años</span></h4>
                        <h4>Nacionalidad: <span> Bogotá Colombia</span></h4>
                        <h4>Idiomas: <span> Español / Ingles A1</span></h4>
                        <h4>Teléfono: <span> 30164442266</span></h4>
                        <h4>Email: <span> gioh2020@gmail.com</span></h4>
                    </div>
                    <a href={cv} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>Download CV <BiDownload className={styles.iconDownLoad}/></a>

                </div>
            

            </div>

           
        </div>
        </div>
    ) 
    
}

export default About