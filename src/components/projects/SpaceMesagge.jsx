import React, { useState } from "react";
import styles from "./Projects.module.css"
import ReactPlayer from "react-player";
import principalImage from "../utilities/image/space/principal.jpg"
import one from "../utilities/image/space/one.jpg"
import two from "../utilities/image/space/two.jpg"
import js from "../utilities/image/imageTec/js.png"
import cssHtml from "../utilities/image/imageTec/cssHtml.png"
import net from "../utilities/image/imageTec/net.png"
import angular from "../utilities/image/imageTec/angular.png"


function RickAndMorty(props) {

    const [pag, setPag] = useState(0)
    const photosArr = [principalImage, one, two]
    const handleStopClick = (event) => {
        event.stopPropagation();
    }
    const handleClick = (event) => {
        if (event.target.value === "back") {
            if (pag === 0) { setPag(2) }
            else { setPag(pag - 1) }
        }
        if (event.target.value === "next") {
            if (pag === 2) { setPag(0) }
            else { setPag(pag + 1) }
        }
    }


    return (
        <div className={styles.principalDiv} onClick={props.handleClickClose}>

            <div className={styles.popUp} onClick={handleStopClick}  >
                <button onClick={props.handleClickClose} className={styles.closeButton}>X</button>

                <div className={styles.imgContainer}>
                    <img src={photosArr[pag]} alt="" />
                    <div className={styles.buttonsContainer}>

                        <button onClick={handleClick} value="back">«</button> <span>  </span> <button onClick={handleClick} value="next">»</button>
                    </div>

                </div>

                <p>Este proyecto individual representa la aplicación práctica de mis conocimientos en C# .NET y Angular. En esta iniciativa, desarrollé un sistema que permite enviar mensajes de ayuda desde la consola imperial. Estos mensajes son encriptados y transmitidos a tres satélites junto con su respectiva distancia. Posteriormente, la consola rebelde recibe estos mensajes, los desencripta y utiliza el método de trilateración para determinar la posición de la nave imperial.</p>
                <ReactPlayer width='100%' height='100%' className={styles.youtube} url='https://www.youtube.com/watch?v=VpwhLRR2mh8&ab_channel=GiovanyVasquez' />

                <div className={styles.tecnologiesDic}>
                    <h1>Tecnol<span>ogias</span></h1>
                    <hr />
                    <div className={styles.imagesDiv}>                        
                        <img src={net} alt=""/>
                        <img src={angular} alt=""/>
                        <img src={js} alt=""/>
                        <img src={cssHtml} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default RickAndMorty