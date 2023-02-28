import React, { useRef, useState } from "react";
import styles from "./Projects.module.css"
import ReactPlayer from "react-player";
import principalImage from "../utilities/image/countries/principal.jpg"
import one from "../utilities/image/countries/one.jpg"
import two from "../utilities/image/countries/two.jpg"
import react from "../utilities/image/imageTec/react.png"
import js from "../utilities/image/imageTec/js.png"
import node from "../utilities/image/imageTec/node.png"
import redux  from "../utilities/image/imageTec/redux.png"
import cssHtml  from "../utilities/image/imageTec/cssHtml.png"
import post  from "../utilities/image/imageTec/post.png"
import sequelize  from "../utilities/image/imageTec/sequelize.png"










function Countries(props) {


    
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
    const startX = useRef(null);
    const threshold = 50;
    const handleTouchStart = (e) => {
        const touch = e.touches[0];
        startX.current = touch.clientX;
      };
    const handleTouchMove = (e) => {

        const touch = e.touches[0];
        const deltaX = touch.clientX - startX.current;
        if (deltaX > threshold) {
            setTimeout(() => {
                
                if(pag===0){ setPag(2) }
                else{setPag(pag-1)}
            }, 500);
        } else if (deltaX < -threshold) {
            setTimeout(() => {
                
                if(pag===2){ setPag(0) }
                else{setPag(pag+1)}
            }, 500);
        }
      };
    return(
        <div   className={styles.principalDiv} onClick={props.handleClickClose}>

        <div className={styles.popUp} onClick={handleStopClick}  >
            <button onClick={props.handleClickClose} className={styles.closeButton}>X</button>

            <div className={styles.imgContainer} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
                <img src={photosArr[pag] } alt="" />
                <div className={styles.buttonsContainer}>

                <button onClick={handleClick} value="back">«</button> <span>  </span> <button onClick={handleClick} value="next">»</button>
                </div>

            </div>

            <p>Proyecto individual, La página web proporciona información detallada sobre todos los países del mundo, incluyendo datos como la población, idioma y capital. También puedes crear actividades para cada país y muestra la hora actual en cada uno. En resumen, es una herramienta útil para aprender sobre diferentes culturas ver que actividades puedes encontrar si quieres viajar a ese pais.</p>
           

            <ReactPlayer width='100%' height='100%' className={styles.youtube} url='https://www.youtube.com/watch?v=_WS3rRnTMQQ&ab_channel=GiovanyVasquez' />
         

            <div className={styles.tecnologiesDic}>
                <h1>Tecnol<span>ogias</span></h1>
                <hr />
                <div className={styles.imagesDiv}>
                    <img src={react} alt="" />
                    <img src={js} alt="" />
                    <img src={node} alt="" />
                    <img src={redux} alt="" />
                    <img src={cssHtml} alt="" />
                    <img src={post} alt="" />
                    <img src={sequelize} alt="" />
                
                    

                </div>
            </div>

        </div>
        </div>
    )
    
}

export default Countries