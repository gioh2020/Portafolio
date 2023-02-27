import React, { useState } from "react";
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

          

            <ReactPlayer width='96%' height='100%' className={styles.youtube} url='https://www.youtube.com/watch?v=_WS3rRnTMQQ&ab_channel=GiovanyVasquez' />
     

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