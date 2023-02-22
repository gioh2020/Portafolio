import React, { useState } from "react";
import styles from "./Projects.module.css"
import ReactPlayer from "react-player";
import principalImage from "../utilities/image/r&m/principal.png"
import one from "../utilities/image/r&m/one.png"
import two from "../utilities/image/r&m/two.png"
import react from "../utilities/image/imageTec/react.png"
import js from "../utilities/image/imageTec/js.png"
import node from "../utilities/image/imageTec/node.png"
import redux  from "../utilities/image/imageTec/redux.png"
import cssHtml  from "../utilities/image/imageTec/cssHtml.png"






function RickAndMorty(props) {


    
    const [pag, setPag] = useState(0)
    const photosArr =[principalImage,one,two]
    const handleStopClick = (event) => {
        event.stopPropagation();
    }
    const handleClick = (event) => {
        if(event.target.value === "back"){
            if(pag===0){ setPag(2) }
            else{setPag(pag-1)}
        }
        if(event.target.value === "next"){
            if(pag===2){ setPag(0) }
            else{setPag(pag+1)}
        }
    }
 

    return(
        <div   className={styles.principalDiv} onClick={props.handleClickClose}>

        <div className={styles.popUp} onClick={handleStopClick}  >
            <button onClick={props.handleClickClose} className={styles.closeButton}>X</button>

            <div className={styles.imgContainer}>
                <img src={photosArr[pag]} alt="" />
                <div className={styles.buttonsContainer}>

                <button onClick={handleClick} value="back">«</button> <span>  </span> <button onClick={handleClick} value="next">»</button>
                </div>

            </div>

            <p>Proyecto individual, La página web es una base de datos completa de los personajes de la serie "Rick and Morty", donde se pueden encontrar biografías detalladas de cada personaje, incluyendo sus características y habilidades especiales. Además, los usuarios pueden agregar a los personajes a sus favoritos, buscar personajes por ID o seleccionar uno al azar, lo que hace que la página sea una herramienta útil y entretenida para los fans de la serie.</p>
            <ReactPlayer width='100%' height='100%' className={styles.youtube} url='https://www.youtube.com/watch?v=TRKBBZbeQ8M&ab_channel=GiovanyVasquez' />

            <div className={styles.tecnologiesDic}>
                <h1>Tecnol<span>ogias</span></h1>
                <hr />
                <div className={styles.imagesDiv}>
                    <img src={react} alt="" />
                    <img src={js} alt="" />
                    <img src={node} alt="" />
                    <img src={redux} alt="" />
                    <img src={cssHtml} alt="" />
                  
                    

                </div>
            </div>

        </div>
        </div>
    )
    
}

export default RickAndMorty