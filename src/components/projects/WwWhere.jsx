import React, { useState } from "react";
import styles from "./Projects.module.css"
import ReactPlayer from "react-player";
import principalImage from "../utilities/image/wwwhere/principal.png"
import one from "../utilities/image/wwwhere/one.png"
import two from "../utilities/image/wwwhere/two.png"
import react from "../utilities/image/imageTec/react.png"
import js from "../utilities/image/imageTec/js.png"
import node from "../utilities/image/imageTec/node.png"
import redux  from "../utilities/image/imageTec/redux.png"
import cssHtml  from "../utilities/image/imageTec/cssHtml.png"
import post  from "../utilities/image/imageTec/post.png"
import sequelize  from "../utilities/image/imageTec/sequelize.png"
import cloud  from "../utilities/image/imageTec/cloud.png"
import mercado  from "../utilities/image/imageTec/mercado.png"
import google  from "../utilities/image/imageTec/google.png"





function WwWhere(props) {


    
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

            <p>Proyecto grupal, wwWHere es una plataforma en línea que te ayuda a encontrar bares, pubs y restaurantes, hacer reservas y pagar desde la plataforma. Los propietarios de los establecimientos también pueden crear y editar la información de sus negocios, así como ver las reservas realizadas por otros usuarios. Además, puedes logearte con tu cuenta de Google para acceder más fácilmente a las funciones de la plataforma.</p>
            <ReactPlayer width='100%' height='100%' className={styles.youtube} url='https://www.youtube.com/watch?v=tj72TZ_OdH0&ab_channel=SolGomezEstevez' />

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
                    <img src={cloud} alt="" />
                    <img src={mercado} alt="" />
                    <img src={google} alt="" />
                    

                </div>
            </div>

        </div>
        </div>
    )
    
}

export default WwWhere