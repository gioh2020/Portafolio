import React, { useState } from "react";
import styles from "./Porfolio.module.css"
import countriesImg from "../utilities/image/countries/principal.jpg"
import WwWhere from "../projects/WwWhere";
import Countries from "../projects/Countries";
import rickAndMortyImg from "../utilities/image/r&m/principal.png"
import principalImage from "../utilities/image/wwwhere/principal.png"
import {FaGithub,FaLink } from "react-icons/fa"
import RickAndMorty from "../projects/RickAndMorty";

function Portfolio(){
    const [wwWhere, setWwWhere] = useState(false)
    const [rickAndMorty, setRickAndMorty] = useState(false)
    const [countries, setCountries] = useState(false)
    const handleClick = (event) =>{
         setWwWhere(true)
        
    }
    const handleClickCountries = (event) =>{   
        setCountries(true)
    }
    const handleClickRickAndMorty = (event) =>{   
        setRickAndMorty(true)
    }

    const handleClickClose = (event) =>{
        setWwWhere(false)
        setCountries(false)
        setRickAndMorty(false)
    }
    return(
        <div>
            <div className={styles.principalDiv}>
                <div className={styles.title}>
                    <h1>PORTAFO<span>LIO</span></h1>
                    <div className={styles.figureContainer}>
                        <h1 className={styles.bar}></h1>
                        <h1 className={styles.circle}></h1>
                        <h1 className={styles.circle}></h1>
                        <h1 className={styles.bar}></h1>
                    </div>
                </div>
                <div className={styles.projectContainer}>
                    <div className={styles.projectContainerInfo}>
                        <h2>wwWhere</h2>
                        <img src={principalImage} className={styles.countryImage} name="wwWhere" onClick={handleClick} alt="" />
                        {wwWhere && <WwWhere handleClickClose={handleClickClose} ></WwWhere>  }
                        <div className={styles.linksContainer}> 
                        <a target="_blank" href="https://wwwhere.up.railway.app/">  <FaLink fontSize="18px" />  <span>DEPLOY</span></a>   
                        <a target="_blank"  href="https://github.com/gioh2020/Grupo13-PF"> <FaGithub fontSize="18px" /> <span>GITHUB</span></a>      
                        </div> 


                    </div>
                    <div className={styles.projectContainerInfo}>
                        <h2>Countries</h2>
                        <img src={countriesImg} className={styles.countryImage} name="countries" onClick={handleClickCountries} alt="" />
                        {countries && <Countries handleClickClose={handleClickClose} ></Countries>  }
                        <div className={styles.linksContainer}> 
                        <a target="_blank" href="https://proyecto-individual-henrry-jbqd.vercel.app/">  <FaLink fontSize="18px" />  <span>DEPLOY</span></a>   
                        <a target="_blank"  href="https://github.com/gioh2020/Proyecto-Individual-Henrry"> <FaGithub fontSize="18px" /> <span>GITHUB</span></a>      
                        </div> 
                    </div>
                    <div className={styles.projectContainerInfo}>
                        <h2>Rick&Morty</h2>
                        <img src={rickAndMortyImg} className={styles.countryImage} onClick={handleClickRickAndMorty} alt="" />
                        {rickAndMorty && <RickAndMorty handleClickClose={handleClickClose} ></RickAndMorty>  }
                        <div className={styles.linksContainer}> 
                        <a target="_blank" href="https://proyecto-rick-and-morty-gamma.vercel.app/home">  <FaLink fontSize="18px" />  <span>DEPLOY</span></a>   
                        <a target="_blank"  href="https://github.com/gioh2020/Proyecto-rick-and-morty"> <FaGithub fontSize="18px" /> <span>GITHUB</span></a>      
                        </div> 
                    </div>

                </div>
                

            </div>
        </div>
    )

}

export default Portfolio